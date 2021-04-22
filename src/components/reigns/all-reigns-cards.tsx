import { GuschtaspCard, KaousCard, KhosrouCard, LohraspCard } from '.';
import React from 'react';

export const ReignCards: React.FC = () => (
  <>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <KaousCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <KhosrouCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <LohraspCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <GuschtaspCard />
      </div>
    </div>
  </>
);
