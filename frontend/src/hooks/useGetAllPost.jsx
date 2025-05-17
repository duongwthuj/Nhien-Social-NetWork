import { setPosts } from "@/redux/postSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSocket } from '../context/SocketContext';


const useGetAllPost = () => {
    const dispatch = useDispatch();
    const socket = useSocket();

    useEffect(() => {
        const fetchAllPost = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/v1/post/all', { withCredentials: true });
                if (res.data.success) { 
                    console.log(res.data.posts);
                    dispatch(setPosts(res.data.posts));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllPost();

        if (socket) {
            const handlePostLiked = async ({ postId }) => {
                await fetchAllPost();
            };
            const handlePostDisliked = async ({ postId }) => {
                await fetchAllPost();
            };
            const handleNewComment = async ({ postId, comment }) => {
                await fetchAllPost();
            };
            socket.on('postLiked', handlePostLiked);
            socket.on('postDisliked', handlePostDisliked);
            socket.on('newComment', handleNewComment);
            return () => {
                socket.off('postLiked', handlePostLiked);
                socket.off('postDisliked', handlePostDisliked);
                socket.off('newComment', handleNewComment);
            };
        }
    }, [socket, dispatch]);
};
export default useGetAllPost;