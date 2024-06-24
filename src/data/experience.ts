import DataTechnologies from "../data/technologies";

const EXPERIENCE = [
    {
        date: "Julio 2022 - Actualidad",
        title: "Full-Stack Developer",
        company: "Simple Data Corp",
        imageCompany: "/images/companies/logo_sdc.png",
        description: "Desarrollo de Nuevas Funcionalidades para Aplicaciones Web en CodeIgniter || Desarrollo de Servicios en PHP (Web Services SOAP y API REST) || Integración de Servicios y Soluciones Externas y de Terceros",
        link: "https://www.simpledatacorp.com/",
        tags: [
            DataTechnologies.MySQL, 
            DataTechnologies.PHP, 
            DataTechnologies.Laravel, 
            DataTechnologies.JQuery, 
            DataTechnologies.Bootstrap, 
            DataTechnologies.GitLab,
            DataTechnologies.Docker
        ]
    },
    {
        date: "Febrero 2022 - Julio 2022",
        title: "Backend Developer",
        company: "Cuerpo de Investigaciones Científicas, Penales y Criminalísticas (CICPC)",
        imageCompany: "/images/companies/logo_cicpc.png",
        description: "Desarrollo Backend de Aplicaciones Web con PHP y Laravel || Diseño y Desarrollo de Microservicios en NodeJS y PHP || Implementación de Repositorio GIT para Control de Versiones || Administración de Servidores y Ambientes de Desarrollo, QA y Producción || Mantenimiento de Web Services SOAP desarrollados en PHP || Monitoreo y Soporte a las Aplicaciones en Producción para garantizar su operatividad",
        link: "https://www.cicpc.gob.ve/",
        tags: [
            DataTechnologies.PostgreSQL, 
            DataTechnologies.PHP, 
            DataTechnologies.Laravel, 
            DataTechnologies.NodeJs,
            DataTechnologies.JQuery, 
            DataTechnologies.Bootstrap, 
            DataTechnologies.Git,
            DataTechnologies.Docker
        ]
    }
];

export default EXPERIENCE;