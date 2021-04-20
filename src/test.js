import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

//Both queries are the same
firestore.collection('users').doc('I7KZjBTNw91RJc6NkZJV').collection('cartItems').doc('OgsKdH3u6vlXDJSsP97W');
firestore.doc('/users/I7KZjBTNw91RJc6NkZJV/cartItems/OgsKdH3u6vlXDJSsP97W');

const myAsyncFunction1 = async () => {
    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();
    
        const secondUser = users[1];
        console.log(secondUser);
    
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id);
        const posts = await postsResponse.json();
    
        console.log(posts);
    }catch (err) {
        console.log('there was an error' + err)
    }
}