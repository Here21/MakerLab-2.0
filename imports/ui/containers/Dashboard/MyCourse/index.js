import React, { Component } from 'react'
import CourseCard from '../../../components/CourseCard'
import './style.css'

export default class MyCourse extends Component {
  render() {
    return (
      <div className="dashboard-mycourse">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    )
  }
}
