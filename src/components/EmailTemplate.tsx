interface EmailTemplateProps {
    name: string
    message: string
}

export const EmailTemplate = ({ name, message }: EmailTemplateProps) => {
    return (
        <div style={{minHeight: '100vh', backgroundColor: '#f9fafb', padding: '32px 16px', fontFamily: 'Arial,Helvetica,sans-serif', margin: 0}}>
            <div style={{maxWidth: '672px', margin: '0 auto', background: '#ffffff', borderRadius: '16px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
                <div style={{padding: '32px'}}>

                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
                        <div>
                            <h1 style={{fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0}}>Mensaje nuevo de { name }</h1>
                            <p style={{color: '#6b7280', fontSize: '14px', margin: '4px 0 0'}}>A continuación tienes el mensaje.</p>
                        </div>
                    </div>

                    <div style={{marginTop: '24px'}}>
                        <p style={{color: '#6b7280', fontSize: '14px', margin: 0}}>Hola! Soy <span style={{fontWeight: 500, color: '#1f2937'}}>{ name }</span>,</p>

                        <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: '8px'}}>
                            <p style={{color: '#374151', fontSize: '14px', lineHeight: 1.6, margin: 0}}>{ message }</p>
                        </div>
                    </div>

                    <div style={{marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280', fontSize: '14px'}}>
                        © 2025 Carlos Arias. Todos los derechos reservados.
                    </div>

                </div>
            </div>
        </div>
    )
}

