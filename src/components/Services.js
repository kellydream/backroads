import React from 'react'
import Service from './Service'
import { services } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div className="section-center services-center">
        {services.map((service)=>{
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}

export default Services