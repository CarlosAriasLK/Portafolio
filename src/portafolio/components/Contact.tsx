'use client';

import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button, Input, Textarea } from '@/components';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { toast } from "sonner"


const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:ceau922@gmail.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/CarlosAriasLK' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/1carlosarias5/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/carlitos_arias15?igsh=MTlzZm44ajB5NW16aQ==' },
];

export default function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const api = axios.create({ baseURL: '/api',});
    const response = await api.post('/send', { name, message, email });

    if ( response.data.error ) {
      setLoading(false);
      toast.error('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
      return;
    }

    setLoading(false);

    setName('');
    setEmail('');
    setMessage('');

    toast.success('Mensaje enviado correctamente!',  {
      duration: 3000,
      position: 'top-center',
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharte.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className='h-full'>
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y te responderé lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <Input type="email" placeholder="Tu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <Textarea placeholder="Tu mensaje" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                  <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className='h-full'>
              <CardHeader>
                <CardTitle>Conecta conmigo</CardTitle>
                <CardDescription>
                  Encuentra mis perfiles en las redes sociales.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className='flex flex-col mt-12 mx-auto max-w'>
            <CardHeader>
              <CardTitle>Disponibilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Actualmente disponible para proyectos freelance y oportunidades de colaboración.
              </p>
            </CardContent>
          </Card>

        </motion.div>

      </div>
    </section>
  );
}
