import { Button } from '@/components/common';
import { PageLayout } from '@/components/layout';
import React from 'react';
import { Link } from 'react-router-dom';

const SpecPage = ({}) => {
  return (
    <PageLayout>
      <div>
        <Link to="/">
          <Button>Go to Home</Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default SpecPage;
