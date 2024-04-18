export type activeLangTypes =  "en" | "de"

export interface ExperienceType {
    title: {
        [key:string]:string
    },
    companyName: string;
    location: string;
    duration: string;
    description: {
        [key:string]:string
    },

}

export interface Education {
    title: {
        [key:string]:string
    };
    location: string;
    duration: string;
    fields: string[];
}