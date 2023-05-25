import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import dataCourses from "../data/dataCourses";


const SingleCourse = () => {
    const params = useParams()
    const course = dataCourses.find((el) => el.slug === params.slug)
    const navigate = useNavigate()

    console.log(course)

    useEffect(() => {
        if (!course) {
            navigate("..", {relative: "path"})
        }
    }, [course])


    return (
        <>
            <h1> Single Courses </h1>
            <h1>{course?.title}</h1>
            <h2>{course?.slug}</h2>
            <h2>{course?.id}</h2>
            <Link to={".."} relative="path"> ALL COURSES</Link>
        </>
    )
}
export default SingleCourse

function ddrr (){
    return (alert('hello'))
}