import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

// Función para detectar el idioma preferido del navegador
function getLocale(request: NextRequest): string {

    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
        const browserLanguages = acceptLanguage
            .split(',')
            .map(lang => lang.split(';')[0].trim().toLowerCase());

        for (const browserLang of browserLanguages) {
            const matchedLocale = locales.find(
                locale => browserLang === locale || browserLang.startsWith(`${locale}-`)
            );

            if (matchedLocale) {
                return matchedLocale;
            }
        }
    }

    return defaultLocale;
}

// Middleware principal
export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameHasLocale = locales.some( locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}` );

    if (pathnameHasLocale) return;
    const locale = getLocale(request);

    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
}


export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};
