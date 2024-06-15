// With the resevred name 'loading.js'. This file applies to all siblings and nested files
import classes from './loading.module.css';

export default function MealsLoadingPage() {
  return <p className={classes.loading}> Fetching meals....</p>;
}
