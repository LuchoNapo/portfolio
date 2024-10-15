import { nav } from "./translations/nav";
import { experience } from "./translations/experience";
import { technologies } from "./translations/technologies";
import { projects } from "./translations/projects";
import { about } from "./translations/about";
import { footer } from "./translations/footer";


export const languages = {
    en: 'EN',
    es: 'ES'
};
export const showDefaultLang = false;
export const defaultLang = 'en';

export const ui = {
    en: {
        "welcome": "Hello! I'm Luciano",
        "technologies": "Technologies",
        ...nav.en,
        ...experience.en,
        ...technologies.en,
        ...projects.en,
        ...about.en,
        ...footer.en


    },
    es: {
        "welcome": "Hola! Soy Luciano",
        "technologies": "Tecnologías",
        ...nav.es,
        ...experience.es,
        ...technologies.es,
        ...projects.es,
        ...about.es,
        ...footer.es

    },
} as const;