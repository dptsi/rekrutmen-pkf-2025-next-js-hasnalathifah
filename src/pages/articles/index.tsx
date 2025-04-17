import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

export function Comments(id: any) {
    const [posts, setPosts] = useState([{
        id:'',
        content:'',
        creator_name: ''
      }])
    useEffect(()=>{
    async function getArt() {
        let data = await fetch('http://localhost:3000/api/articles/'+{id})
        let art = await data.json()
        setPosts(art.data)  
    }getArt()
    
})

return (
    <ul>
        {posts.map((post) => (
        <li key={post.id}>
        <Card variant={"filled"}>
        <CardBody>
        <Heading size='md'> {post.creator_name}</Heading>
            <Text>{post.content}</Text>
        </CardBody>
        </Card>
        </li>
        ))}
    </ul>
)

}

export default  function articles(){
    const [posts, setPosts] = useState([{
            id:'',
            title:'',
            creator_name: '',
            comments_count: ''
          }])
    useEffect(()=>{
        async function getArt() {
            let data = await fetch('http://localhost:3000/api/articles')
            let art = await data.json()
            setPosts(art.data)  
          }getArt()
    })
    
    console.log(posts)
    return(
        <div id="article-container">
            <div id="article-list">
            <ul>
            {posts.map((post) => (
            <li key={post.id}>
            <Box mx={4} my={4}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >

                <Stack>
                    <CardBody>
                    <Heading size='md'>{post.title}</Heading>

                    <Text py='1'>
                        {post.creator_name}
                    </Text>
                    <Text py='1'>
                        {post.comments_count}
                    </Text>
                    </CardBody>

                    <CardFooter>

                    <Button >
                        View comments
                    </Button>
                    </CardFooter>
                    {/* <Comments id={post.id}></Comments> */}
                </Stack>
                </Card>
            </Box>
            </li>
        ))}
    </ul>
            </div>
        </div>
    )
} 
