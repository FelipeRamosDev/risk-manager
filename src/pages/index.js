import CalculateRisk from '@/views/components/activities/calculate-risk';

// Styles
import mainStyles from 'styles/main.module.css';

export default function Home() {
  return (
    <div className={mainStyles.main}>
      <CalculateRisk />
    </div>
  )
}
