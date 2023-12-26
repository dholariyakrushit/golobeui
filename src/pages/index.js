
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Showfligth from '@/components/Showfligth'
import PlanTrip from '@/components/PlanTrip'
import Detailview from '@/components/Detailview'
import Reviews from '@/components/Reviews'
import Subscribe from '@/components/Subscribe'



export default function Home() {
  return (
    <>
     <Hero/>
     <Showfligth />
     <PlanTrip />
     <Detailview />
     <Reviews />
     <Subscribe/>
    </>
  )
}
