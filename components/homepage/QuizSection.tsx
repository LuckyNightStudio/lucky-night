import {Box, Button, Container, Typography, useMediaQuery, useTheme, Modal, Card, CardContent, CardActions } from "@mui/material";
import {BookButton, ButtonStyle} from "../BookButton";
import Pattern from '../../public/pink-pattern.webp'
import {useContext, useEffect, useState} from "react";
import Link from "next/link";
import {ConfettiContext} from "../context/ConfettiContext";

const quizStates = [
    {title: 'Are you wanting a website?', no: 2, yes: 1},
    {title: 'Do you want to sell products online?', no: 3, yes: 4},
    {title: 'Personal Business', link: '/services/personal-business', description: 'Full brand strategy and visual design experience to give you all the tools to grow your business in your ideal market.'},
    {title: 'Service Business', link: '/services/service-business', description: 'Full brand strategy, visual design and custom, conversion-focussed website creation to cement you as a trustworthy, exciting key player among your dream audience'},
    {title: 'E-Commerce Business', link: '/services/ecommerce-business', description: 'Full brand strategy, visual design and custom, conversion-focussed e-commerce site creation using Shopify.'}
]

export const QuizSection = () => {
    const [quizState, setQuizState] = useState<number>(0)
    const theme = useTheme();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'))

    const {setShowConfetti} = useContext(ConfettiContext)

    useEffect(() => {
        setShowConfetti(!!quizStates[quizState].description)
    }, [setShowConfetti, quizState])

    const handleClose = (): void => {
        setQuizState(0)
        setIsModalOpen(false)
    }

    useEffect(() => {
        return () => {
            setShowConfetti(false)
        }
    }, [])

    return (
        <Box component='section' bgcolor='secondary.main' sx={{ backgroundImage: `url('${Pattern.src}')`}} px={4} py={8}>
            <Container maxWidth='md'>
                <Box p={5} sx={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 8}}>
                    <Typography variant='h4' textAlign='center' mb={2}>
                        Not sure which <span style={{color: theme.palette.primary.main}}>service</span> you need?
                    </Typography>
                    <Typography variant='h6' textAlign='center' mb={2}>
                        Book a free consultation to discuss your requirements and goals, & we&apos;ll advise on the best way forward for your project.
                    </Typography>
                    <Box display='flex' justifyContent='space-around' alignItems='center' flexDirection={largerThanMD ? 'row' : 'column'}>
                        <BookButton color='yellow'/>
                        <Typography variant='body1' textAlign='center' py={2}>
                            or
                        </Typography>
                        <Button variant='contained' color='secondary' sx={{...ButtonStyle, width: 270}} onClick={() => setIsModalOpen(true)}>
                            TAKE THE QUIZ
                        </Button>
                    </Box>
                </Box>
            </Container>
                <Modal
                    open={isModalOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box>
                    <Card sx={{ p: 5, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: 5, background: theme.palette.blue.main }}>
                        <CardContent>
                            <Typography variant='h4' textAlign='center' mb={3} color='white'>
                                {quizStates[quizState].title}
                            </Typography>
                            {quizStates[quizState].description && <Typography textAlign='center' mb={3} color='white'>
                                {quizStates[quizState].description}
                            </Typography>}
                        </CardContent>
                        <CardActions>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                                {quizStates[quizState].no && <Button variant='contained' size="large" color='secondary' onClick={() => setQuizState(quizStates[quizState].no!)}>NO</Button>}
                                {quizStates[quizState].yes && <Button variant='contained' size="large" onClick={() => setQuizState(quizStates[quizState].yes!)}>YES</Button>}
                                {quizStates[quizState].link && (
                                    <Link href={quizStates[quizState].link!} passHref >
                                        <Button variant='contained' fullWidth>Learn more</Button>
                                    </Link>
                                )}
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Modal>
        </Box>
    )
}
