//libs
import { createContext, useState } from "react";
import type { Props } from "../../types/common";
import type { Education } from "../../types/education";

const EducationContext = createContext<Education | undefined>(undefined);

function Provider({children}: Props) {
    const [courseTitle, setCourseTitle] = useState('');
    const values: Education = {
        children,
        courseTitle,
        setCourseTitle
    }

    return (
        <EducationContext.Provider value={values}>
            {children}
        </EducationContext.Provider>
    )
}

export {EducationContext, Provider}