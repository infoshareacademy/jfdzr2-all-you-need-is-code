import db from '../../fire'
import { useCollectioData } from 'react-firebase-hoooks'

function Chat() {
    const messageRef = db.collection('Messages');
    const query = messageRef.orderBy('createsAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
}