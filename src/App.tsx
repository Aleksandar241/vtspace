import { useCallback } from 'react';
import { Button } from '@atoms';

const App = (): JSX.Element => {
  const onClickHandler = useCallback(() => {
    console.log('Button test');
  }, []);

  return (
    <div>
      <Button title="Test" onClick={onClickHandler} />
    </div>
  );
};

export default App;
