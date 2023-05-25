import dataCourses from "../data/dataCourses";
import {NavLink, useLocation} from "react-router-dom";
import queryString from 'query-string'
import {useState} from "react";

const sortFunc = (data, key) => {
    const course = [...data]
    course.sort((a, b) => a[key] > b[key] ? 1 : -1)
    return course
}

const Courses = () => {
    const location = useLocation()
    const query = queryString.parse(location.search)
    const [sortKey, setSortKey] = useState(query.sort)

    const [sortedCourses, setSortedCourses] = useState(sortFunc(dataCourses, sortKey))



    return (
        <>
            <h1>All courses</h1>
            {sortedCourses.map((el) => <div key={el.id}><NavLink to={el.slug}> {el.title} </NavLink></div>)}
        </>
    )
}
export default Courses