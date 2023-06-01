
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../globals.css'

const auth = getAuth();
const [user, loading] = useAuthState(auth);
const router = useRouter();

export default function Profile() {
    if (loading) {
        return <div>Loading...</div>
    }
    
    if (!user) {
        router.push('/');
        return <div>Please sign in to continue</div>
    }
  return (
    <div>
      <h1>Profile page</h1>;
      <button onClick={() => auth.signOut()}>
        Log out
      </button>
    </div>
  )
 
}