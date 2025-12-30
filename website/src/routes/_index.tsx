import { redirect } from 'react-router';

export const loader = () => {
  return redirect('https://github.com/remorses/playwriter');
};

export default function Index() {
  return null;
}
