import { useState } from "react";

const List = [
    {
        id: 0,
        category: "Programming & Markup Languages",
        checked: false,
        skills: [
            { name: "JavaScript", checked: false },
            { name: "Java", checked: false },
            { name: "C", checked: false },
            { name: "C++", checked: false },
            { name: "Python", checked: false },
            { name: "Ruby", checked: false },
            { name: "HTML", checked: false },
            { name: "CSS", checked: false },
        ],
    },
    {
        id: 1,
        category: "Front-End Development",
        checked: false,
        skills: [
            { name: "React.js", checked: false },
            { name: "MUI", checked: false },
            { name: "Figma", checked: false },
            { name: "Next.js", checked: false },
            { name: "Tailwind CSS", checked: false },
        ],
    },
    {
        id: 2,
        category: "Back-End Development",
        checked: false,
        skills: [
            { name: "Node.js", checked: false },
            { name: "Express", checked: false },
            { name: "Django", checked: false },
            { name: "Spring Boot", checked: false },
            { name: "GraphQL", checked: false },
        ],
    },
    {
        id: 3,
        category: "Databases",
        checked: false,
        skills: [
            { name: "MongoDB", checked: false },
            { name: "MySQL", checked: false },
            { name: "PostgreSQL", checked: false },
            { name: "Redis", checked: false },
            { name: "Firebase", checked: false },
        ],
    },
    {
        id: 4,
        category: "Cloud, Infrastructure & DevOps",
        checked: false,
        skills: [
            { name: "AWS", checked: false },
            { name: "Docker", checked: false },
            { name: "Kubernetes", checked: false },
            { name: "Terraform", checked: false },
            { name: "CI/CD pipelines", checked: false },
        ],
    },
];
const CheckedBox = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}>
        <path d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"></path>
        <path d="M10.996 12.556 9.7 11.285l-1.4 1.43 2.704 2.647 4.699-4.651-1.406-1.422z"></path>
    </svg>
)

const CheckBox = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}>
        <path d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"></path>
    </svg>
)

export default function NestedChecks() {
    /**
     * The way im thinking of it is, lets say we have a list of languages , it has 3 items. If we click languages then it should selected all,
     * if we individually selected it should do nothing unless we selected all of them and then it will auto select the language section.
     */
    const [skills, setSkills] = useState(List);
    function NestedItem({checked, category, skills}) {
        {/* parent */}
        <div className="flex justify-items-start"> 
            {checked ? <CheckedBox className="w-10 h-10"/> : <CheckBox className="w-10 h-10"/>}
            {category}
        </div>
        {/* child */}
        {skills.map((skill) => (
            <div className="ml-4 flex justify-items-start">
                {checked ? <CheckedBox className="w-10 h-10"/> : <CheckBox className="w-10 h-10"/>}
                {skill.name}
            </div>
        ))}
    }

    // const toggleCheck = (id) => {
    //     setSkills(skills.map((list) => {
    //         if ()
    //     }))
    // }
    return (
        <div className="flex items-center justify-center p-8 overflow-auto">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
                {List.map((list) => (
                    <NestedItem 
                        key={list.id}
                        {...list}
                    />
                ))}
            </div>
        </div>
    )
}