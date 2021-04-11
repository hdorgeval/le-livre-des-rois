import { GuschtaspCard, KhosrouCard, LohraspCard } from '.';
import React from 'react';

export const ReignCards: React.FC = () => (
  <>
    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <KhosrouCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <LohraspCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <GuschtaspCard />
      </div>
    </div>
  </>
);
