import { KhosrouCard, LohraspCard } from './';
import React from 'react';

export const ReignCards: React.FC = () => (
  <>
    <div className="row">
      <div className="col-sm-6">
        <KhosrouCard />
      </div>
      <div className="col-sm-6">
        <LohraspCard />
      </div>
    </div>
    {/* <KhosrouReignCard />
    <LohraspReignLink />
    <GuschtaspReignLink /> */}
  </>
);
