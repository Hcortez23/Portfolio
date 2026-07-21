import { useState } from 'react';
import { profile } from '../../../data/profile';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Reveal from '../../ui/Reveal/Reveal';
import Icon from '../../ui/Icon/Icon';
import styles from './Contact.module.css';

function Contact() {
  const [copied, setCopied] = useState(false);
  const { email, phone, whatsapp } = profile.contact;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // el navegador no soporta el portapapeles; el usuario puede copiar manualmente
    }
  };

  const channels = [
    {
      id: 'email',
      icon: 'mail',
      label: 'Correo',
      value: email,
      action: handleCopyEmail,
      actionLabel: copied ? 'Copiado' : 'Copiar',
      actionIcon: copied ? 'check' : 'copy',
    },
    phone && {
      id: 'phone',
      icon: 'briefcase',
      label: 'Teléfono',
      value: phone,
      href: `tel:${phone}`,
    },
    whatsapp && {
      id: 'whatsapp',
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: 'Escribir mensaje',
      href: whatsapp,
    },
  ].filter(Boolean);

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="~/contacto"
          title="Contacto"
          description="¿Tienes un proyecto en mente o quieres conversar sobre alguna oportunidad? Escríbeme por cualquiera de estos canales."
          align="center"
        />

        <div className={styles.grid}>
          {channels.map((channel, index) => (
            <Reveal key={channel.id} delay={index * 80} className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon name={channel.icon} size={20} />
              </div>
              <p className={`${styles.cardLabel} mono`}>{channel.label}</p>
              <p className={styles.cardValue}>{channel.value}</p>

              {channel.href ? (
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className={styles.cardAction}>
                  Abrir <Icon name="externalLink" size={14} />
                </a>
              ) : (
                <button type="button" className={styles.cardAction} onClick={channel.action}>
                  {channel.actionLabel} <Icon name={channel.actionIcon} size={14} />
                </button>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className={styles.socialRow}>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Icon name="github" size={18} />
            GitHub
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Icon name="linkedin" size={18} />
            LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
