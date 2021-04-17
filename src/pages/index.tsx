import { FormEvent, useEffect, useState } from 'react';
import { Button, Container, Form, Input } from 'semantic-ui-react';
import { verifyEthAddress } from '../util';
import Faucet from '../artifacts/contracts/Faucet.sol/Faucet.json';
import { ethers } from 'ethers';

declare const window: any;

type Props = {
  contractAddress: string;
};

function Home({ contractAddress }: Props): React.ReactNode {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [contractBalance, setContractBalance] = useState<string>();

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
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contractBalance = await provider.getBalance(contractAddress);
      return contractBalance.toString();
    }
  };

  const requestFunds = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Faucet.abi, signer);
      try {
        await contract.withdraw(value);
        console.log('Successfully withdrawed funds');
      } catch (err) {
        console.log('Error: ', err);
      }
    }
  };

  useEffect(() => {
    if (window.ethereum !== undefined) {
      getContractBalance().then((bal) => setContractBalance(bal));
    }
  }, []);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Ropsten Faucet</h1>
        <Form.Field error={touched && !isValid}>
          <label>Your Ropsten wallet address</label>
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Field>
        <Button primary>Request Ether</Button>
      </Form>
      <span>
        Contract balance - {parseInt(contractBalance || '') / Math.pow(10, 18)}{' '}
        ether
      </span>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    },
  };
}

export default Home;
