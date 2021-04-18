import { FormEvent, useEffect, useState } from 'react';
import { Button, Container, Form, Input, Message } from 'semantic-ui-react';
import { verifyEthAddress } from '../util';
import axios from 'axios';

function Home(): React.ReactNode {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [contractBalance, setContractBalance] = useState<string>();
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      setTouched(true);
    }

    setIsValid(verifyEthAddress(value));
  }, [value]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await requestFunds();
  };

  const getContractBalance = async () => {
    try {
      const { data } = await axios.get('/api');
      const { balance } = data;
      setContractBalance(balance);
    } catch (e) {
      console.log(e);
      setContractBalance('');
    }
  };

  const requestFunds = async () => {
    setLoading(true);
    try {
      await axios.post('/api', { address: value });
      setSuccess(true);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getContractBalance();
  }, []);

  return (
    <Container>
      <Form success={success} error={!!error} onSubmit={onSubmit}>
        <h1>Ropsten Faucet</h1>
        <Form.Field error={touched && !isValid}>
          <label>Your Ropsten wallet address</label>
          <Input
            disabled={loading}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Field>
        <Message error content={error} />
        {success && (
          <Message
            success
            content="0.1 ether will soon be transferred to your wallet."
          />
        )}
        <Button loading={loading} primary>
          Request Ether
        </Button>
      </Form>
      {contractBalance ? (
        <span>
          Contract balance: {parseInt(contractBalance || '') / Math.pow(10, 18)}{' '}
          ether
        </span>
      ) : null}
    </Container>
  );
}

export default Home;
