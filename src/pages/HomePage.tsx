import { Button } from '@/components/common';
import { PageLayout } from '@/components/layout';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <PageLayout>
      <h1>Home Page</h1>
      <div className="h-20 space-x-2">
        <Button styles="secondary">SignIn</Button>
        <Button styles="secondary">SignUp</Button>
      </div>
      <div>
        <Link to="/spec">
          <Button styles="tertiary">Go to Spec</Button>
        </Link>
      </div>
    </PageLayout>
  );
}

export default HomePage;
