import { useState } from 'react';
import { useUser } from '../user/useUser';

interface PositionsProps {
  symbol: string;
  quantity: number;
}

interface PositionsProps {
  userId: string;
}
const Positions = ({ userId }: PositionsProps) => {
  const [positions, setPositions] = useState<PositionsProps[]>([]);
  const { user } = useUser(userId);

  return (
    <div>
      {positions.map((item) => {
        return (
          <div>
            <p>{item.symbol}</p>
            <p>{item.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Positions;
