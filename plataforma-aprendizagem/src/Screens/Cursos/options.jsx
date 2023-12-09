import course from "../../assets/CourseMyCourses.svg"
import atividades from "../../assets/AtividadesMyCourses.svg"
import clock from "../../assets/ClockMyCourses.svg"

export const statusOptions = [
    {
        icon: course,
        label: "3/7 Cursos"
    },
    {
        icon: atividades,
        label: "0/0 Atividades"
    },
    {
        icon: clock,
        label: "15 horas cumpridas"
    },
]

export const enrolledCoursesOptions = [
    {
        icon: course,
        label: "3/7 Cursos",
        completed: true
    },
    {
        icon: atividades,
        label: "0/0 Atividades",
        completed: false
    },
    {
        icon: clock,
        label: "15 horas cumpridas",
        completed: false
    },
    
    {
        icon: clock,
        label: "15 horas cumpridas",
        completed: true
    }
]