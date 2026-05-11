import type { ReactNode, Dispatch, SetStateAction } from "react"

export type Education = {
    children: ReactNode;
    courseTitle: string;
    setCourseTitle: Dispatch<SetStateAction<string>>;
}

export type Certification = {
    children: ReactNode;
    certificateID: string;
    setCertificateID: Dispatch<SetStateAction<string>>;
}