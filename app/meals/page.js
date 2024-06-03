import React from 'react'
import classes from "./page.module.css"
import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid'
function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Celicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself, it is easy and fun</p>
        <p className={classes.cta}>
          <Link href="/meals/shre">
            Share Your Favorit Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]}/>
      </main>
    </>
    
  )
}

export default MealsPage