// =========================================================================
// ARCHIVO DE CONFIGURACIÓN Y CONTENIDOS CENTRALIZADOS DE CONIMAPE 2026
// Edita este archivo para modificar textos, agregar ponentes, noticias o auspiciadores.
// =========================================================================

export const LINK_FORM = 'https://forms.gle/mpHBCAgK6z5Wqk9A6'
export const WHATSAPP_NUMBER = '51963799271'
export const WHATSAPP_DISPLAY = '+51 963 799 271'
export const CONTACT_EMAIL = 'conimape.congreso@gmail.com'
export const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir más información sobre el II CONIMAPE 2026.'

export const SOCIAL_LINKS = {
    facebook: 'https://web.facebook.com/profile.php?id=61594049040685',
    instagram: 'https://www.instagram.com/conimape.congreso/',
    linkedin: 'https://www.linkedin.com/in/ii-conimape-28120a433',
    tiktok: 'https://www.tiktok.com/@conimape?is_from_webapp=1&sender_device=pc',
}

export const EVENT_DETAILS = {
    title: 'II CONIMAPE 2026',
    subtitle: 'II Congreso Internacional de la Pequeña Minería y Minería Artesanal',
    slogan: 'TRADICIÓN MINERA · FUTURO SOSTENIBLE',
    date: '04 - 06 de Noviembre 2026',
    location: 'AREQUIPA · PERÚ',
    targetDate: 'November 4, 2026 09:00:00',
    mision: 'Promover el desarrollo integral, la innovación tecnológica y la formalización sostenible de la pequeña minería y minería artesanal en el Perú y Latinoamérica.',
    vision: 'Ser el congreso referente a nivel internacional para la transformación responsable, productiva y ambientalmente amigable del sector minero artesanal y de pequeña escala.',
}

export const LOCATION_INFO = {
    venue: 'Colegio de Ingenieros del Perú - CD Arequipa',
    city: 'Arequipa, Perú',
    address: 'Av. Independencia 150, Arequipa 04001',
    googleMapsUrl: 'https://maps.app.goo.gl/cRkFB2zM9wP3ZvpP8',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.420845112345!2d-71.530514!3d-16.406124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a5b15000001%3A0x123456789abcdef!2sColegio%20de%20Ingenieros%20del%20Per%C3%BA%20-%20CD%20Arequipa!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe',
}

export const NAV_LINKS = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre el Congreso', href: '/#conocenos' },
    { name: 'Programa', href: '/programa' },
    { name: 'Ponentes', href: '/ponentes' },
    { name: 'Auspiciadores', href: '/auspiciadores' },
    { name: 'Noticias', href: '/noticias' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Ubicación', href: '/#ubicacion' },
]

export const PILARES = [
    { icono: '💡', titulo: 'Innovación' },
    { icono: '⚙️', titulo: 'Tecnología' },
    { icono: '📜', titulo: 'Formalización' },
    { icono: '🌱', titulo: 'Sostenibilidad' },
]

export const EJES_TEMATICOS = [
    {
        id: 1,
        iconoClass: 'fa-solid fa-file-signature',
        titulo: 'Formalización Minera',
        descripcion: 'Fortalecemos procesos de formalización, productividad y desarrollo sostenible para los pequeños productores mineros.',
    },
    {
        id: 2,
        iconoClass: 'fa-solid fa-helmet-safety',
        titulo: 'Seguridad Minera',
        descripcion: 'Promovemos una cultura preventiva, buenas prácticas de SST y protección integral de la vida del trabajador.',
    },
    {
        id: 3,
        iconoClass: 'fa-solid fa-leaf',
        titulo: 'Gestión Ambiental y Tecnologías Limpias',
        descripcion: 'Impulsamos una minería responsable, reducción del uso de mercurio, cianuración eficiente y cuidado del entorno.',
    },
    {
        id: 4,
        iconoClass: 'fa-solid fa-chart-line',
        titulo: 'Comercialización y Financiamiento',
        descripcion: 'Mecanismos de acceso a créditos, trazabilidad de minerales y alianzas de mercado responsable.',
    },
]

// =========================================================================
// LISTA DE PONENTES (Agregar o modificar aquí los conferencistas)
// =========================================================================
export const PONENTES = [
    {
        id: 1,
        nombre: 'Ing. Carlos Mendoza',
        cargo: 'Especialista en Formalización Minera',
        institucion: 'Ministerio de Energía y Minas',
        foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
        tema: 'Avances y Retos en la Ley de Formalización MAPE en el Perú',
        categoria: 'Internacional',
    },
    {
        id: 2,
        nombre: 'Dra. María Elena Torres',
        cargo: 'Investigadora en Tecnologías Limpias',
        institucion: 'Universidad Nacional de San Agustín',
        foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
        tema: 'Gravimetría y Lixiviación Ecológica sin Mercurio',
        categoria: 'Nacional',
    },
    {
        id: 3,
        nombre: 'Dr. John Miller',
        cargo: 'Consultor Internacional en Seguridad Minera',
        institucion: 'Global Mining Safety Institute',
        foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
        tema: 'Estándares Internacionales de Prevención de Riesgos en Socavón',
        categoria: 'Internacional',
    },
    {
        id: 4,
        nombre: 'Ing. Ana Paula Quispe',
        cargo: 'Directora de Sostenibilidad',
        institucion: 'ONG Red Minera Sostenible',
        foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
        tema: 'Trazabilidad y Oro Ético en Mercados Internacionales',
        categoria: 'Nacional',
    },
]

// =========================================================================
// PROGRAMA / CRONOGRAMA POR DÍAS
// =========================================================================
export const CRONOGRAMA = [
    {
        dia: 'Día 1 - Miércoles 04 Noviembre',
        fecha: '04 Nov 2026',
        actividades: [
            { hora: '08:00 AM - 09:30 AM', evento: 'Registro de Participantes y Entrega de Credenciales', expositor: 'Comité Organizador', sala: 'Auditorio Principal' },
            { hora: '09:30 AM - 10:30 AM', evento: 'Ceremonia de Inauguración II CONIMAPE 2026', expositor: 'Autoridades y Comité', sala: 'Auditorio Principal' },
            { hora: '10:30 AM - 11:30 AM', evento: 'Conferencia Magistral: Marco Regulatorio y Formalización Minera', expositor: 'Ing. Carlos Mendoza', sala: 'Auditorio Principal' },
            { hora: '02:00 PM - 04:00 PM', evento: 'Mesa de Trabajo: Desafíos Ambientales en la Pequeña Minería', expositor: 'Panel de Especialistas', sala: 'Sala A' },
        ]
    },
    {
        dia: 'Día 2 - Jueves 05 Noviembre',
        fecha: '05 Nov 2026',
        actividades: [
            { hora: '09:00 AM - 10:30 AM', evento: 'Tecnologías Limpias para Procesamiento de Minerales', expositor: 'Dra. María Elena Torres', sala: 'Auditorio Principal' },
            { hora: '11:00 AM - 01:00 PM', evento: 'Taller Práctico: Seguridad y Salud en Minería de Socavón', expositor: 'Dr. John Miller', sala: 'Sala B' },
            { hora: '03:00 PM - 05:30 PM', evento: 'Feria Tecnológica y Rueda de Negocios Mineros', expositor: 'Empresas Auspiciadoras', sala: 'Explanada Cerro Juli' },
        ]
    },
    {
        dia: 'Día 3 - Viernes 06 Noviembre',
        fecha: '06 Nov 2026',
        actividades: [
            { hora: '09:30 AM - 11:30 AM', evento: 'Financiamiento y Comercialización Responsable de Oro', expositor: 'Ing. Ana Paula Quispe', sala: 'Auditorio Principal' },
            { hora: '11:30 AM - 01:00 PM', evento: 'Presentación de Conclusiones y Propuestas CONIMAPE 2026', expositor: 'Comité Académico', sala: 'Auditorio Principal' },
            { hora: '01:00 PM - 02:00 PM', evento: 'Clausura y Almuerzo de Confraternidad Minera', expositor: 'Todos los asistentes', sala: 'Gran Salón' },
        ]
    }
]

// =========================================================================
// AUSPICIADORES Y ALIADOS ESTRATÉGICOS
// =========================================================================
export const AUSPICIADORES = {
    platino: [
        { nombre: 'Empresa Minera Ejemplo 1', logo: '/imagenes/logo.png', categoria: 'Platino' },
        { nombre: 'Proveedor Tecnológico 2', logo: '/imagenes/logo.png', categoria: 'Platino' },
    ],
    oro: [
        { nombre: 'Maquinarias y Equipos SAC', logo: '/imagenes/logo.png', categoria: 'Oro' },
        { nombre: 'Soluciones Ambientales Peru', logo: '/imagenes/logo.png', categoria: 'Oro' },
    ],
    aliados: [
        { nombre: 'Gobierno Regional de Arequipa', logo: '/imagenes/logo.png', categoria: 'Institucional' },
        { nombre: 'Colegio de Ingenieros del Perú', logo: '/imagenes/logo.png', categoria: 'Institucional' },
    ]
}

// =========================================================================
// NOTICIAS Y NOVEDADES
// =========================================================================
export const NOTICIAS = [
    {
        id: 1,
        titulo: 'Lanzamiento Oficial del II CONIMAPE 2026 en Arequipa',
        fecha: '01 de Septiembre, 2026',
        resumen: 'Se presentó oficialmente la II edición del Congreso Internacional de la Pequeña Minería con presencia de líderes del sector.',
        imagen: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80',
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        titulo: 'Nuevas Becas de Asistencia para Estudiantes de Ingeniería de Minas',
        fecha: '25 de Agosto, 2026',
        resumen: 'El comité organizador dispondrá de 100 becas especiales para estudiantes universitarios destacados.',
        imagen: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        titulo: 'Convocatoria de Trabajos de Investigación Abierta',
        fecha: '15 de Agosto, 2026',
        resumen: 'Investigadores y profesionales pueden enviar sus ponencias hasta el 30 de septiembre.',
        imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

// =========================================================================
// GALERÍA DE IMÁGENES (I EDICIÓN)
// =========================================================================
export const GALERIA_FOTOS = [
    { id: 1, titulo: 'Inauguración I CONIMAPE', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80' },
    { id: 2, titulo: 'Ponencia Magistral', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80' },
    { id: 3, titulo: 'Feria Tecnológica', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80' },
    { id: 4, titulo: 'Networking y Mineros', url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format&fit=crop&q=80' },
    { id: 5, titulo: 'Exhibición de Equipos', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80' },
    { id: 6, titulo: 'Clausura y Premiación', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=80' }
]

// =========================================================================
// PREGUNTAS FRECUENTES (FAQ) PARA EL ASISTENTE VIRTUAL "MUQUI"
// =========================================================================
export const FAQ_MUQUI = [
    {
        pregunta: '¿Cuándo y dónde se realizará el II CONIMAPE 2026?',
        respuesta: 'El congreso se realizará del 04 al 06 de Noviembre de 2026 en el Centro de Convenciones Cerro Juli, en Arequipa - Perú.',
    },
    {
        pregunta: '¿Cómo me inscribo al congreso?',
        respuesta: 'Puedes hacer clic en el botón "Inscríbete ahora" para llenar el formulario oficial de registro en Google Forms.',
    },
    {
        pregunta: '¿Se otorgará certificado de participación?',
        respuesta: '¡Sí! Todos los participantes que cumplan con la asistencia mínima recibirán un certificado digital firmado por el comité organizador e instituciones aliadas.',
    },
    {
        pregunta: '¿Quiénes pueden participar?',
        respuesta: 'Está dirigido a pequeños mineros, mineros artesanales, profesionales, ingenieros, estudiantes, empresas proveedoras e instituciones públicas/privadas.',
    },
    {
        pregunta: '¿Cómo puedo ser auspiciador del evento?',
        respuesta: 'En la sección "Auspiciadores" encontrarás la opción para contactarte con nuestro equipo comercial y solicitar el brochure corporativo de patrocinios.',
    },
]

export const PUBLICO_OBJETIVO = [
    {
        iconoClass: 'fa-solid fa-helmet-safety',
        titulo: 'Pequeños Mineros',
        descripcion: 'Productores mineros que buscan mejorar sus procesos y fortalecer su actividad.',
    },
    {
        iconoClass: 'fa-solid fa-person-digging',
        titulo: 'Mineros Artesanales',
        descripcion: 'Espacio para compartir experiencias, soluciones y oportunidades de desarrollo.',
    },
    {
        iconoClass: 'fa-solid fa-industry',
        titulo: 'Empresas Proveedoras',
        descripcion: 'Tecnología, equipos y servicios para el sector minero.',
    },
    {
        iconoClass: 'fa-solid fa-user-gear',
        titulo: 'Profesionales y Técnicos',
        descripcion: 'Ingenieros y especialistas vinculados a la industria minera.',
    },
    {
        iconoClass: 'fa-solid fa-graduation-cap',
        titulo: 'Estudiantes',
        descripcion: 'Nuevas generaciones interesadas en minería sostenible.',
    },
    {
        iconoClass: 'fa-solid fa-building-columns',
        titulo: 'Instituciones',
        descripcion: 'Organizaciones comprometidas con el desarrollo minero.',
    },
]

export const BENEFICIOS = [
    {
        iconoClass: 'fa-solid fa-graduation-cap',
        titulo: 'Actualización Técnica',
        descripcion: 'Conoce nuevas metodologías, experiencias y soluciones aplicadas al sector minero.',
    },
    {
        iconoClass: 'fa-solid fa-handshake-angle',
        titulo: 'Networking Especializado',
        descripcion: 'Conecta con profesionales, empresas proveedoras y actores del sector minero.',
    },
    {
        iconoClass: 'fa-solid fa-lightbulb',
        titulo: 'Innovación Minera',
        descripcion: 'Descubre tecnologías y herramientas para mejorar los procesos mineros.',
    },
    {
        iconoClass: 'fa-solid fa-chart-line',
        titulo: 'Nuevas Oportunidades',
        descripcion: 'Genera alianzas estratégicas y oportunidades de crecimiento.',
    },
]