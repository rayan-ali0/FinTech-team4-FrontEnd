import React, { useEffect, useState } from 'react'
import styles from './Wallet.module.css'
import WalletCards from '../../Components/WalletCards/WalletCards';
import crypto from '../../assets/images/crypto.png'
import dollar from '../../assets/images/dollar.png'
import Button from '@mui/material/Button';
import DashCards from '../dashCards/DashCards';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from "axios";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {} from '../../Components/depositModal/Deposit'
import { Box, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import { handleOnlyNumbers, handleSubmit } from '../depositModal/utils';
import  {useUserContext}  from '../../Auth/UserContext';


export default function Wallet({ id, setTogglePage}) {
    const { myUser, signin, signout } = useUserContext();
    const [userWallet, setUserWallet] = useState()
    const [userTransactions, setUserTransactions] = useState()
    const [walletLoading, setWalletLoading] = useState(true)
    const [recentsLoading, setRecentsLoading] = useState(true)

    /*********************/
    const fetchWallet = async() => {

        await axios.get(`${process.env.REACT_APP_PATH}/wallet/readByUser/${myUser.id}`)
            .then((res) => {
                setUserWallet(res.data);
                console.log(res.data)
                setWalletLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching Wallet:", error);
            });
    }

    const fetchRecents =async () => {
       await axios.get(`${process.env.REACT_APP_PATH}/read/lastTransaction?userId=${myUser.id}`)
            .then((res) => {
                setUserTransactions(res.data);
                console.log(res.data)
                setRecentsLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching Recents Transactions:", error);
            });
    }


const transactionHandler=()=>{
    setTogglePage(false);
    console.log("set to false")
}


    useEffect(() => {
        fetchWallet()
        fetchRecents()
    }, [myUser.id]);
    /******************* */

    const useStyle = {
        hoverBtn: {
            background: `#FFE712`,
            color: "#000",
            height: `3em`,
            width: `25%`,
            '&:hover': {
                backgroundColor: `#ffef61 !important`
            },
            '@media(max-width: 950px)': { fontSize: '0.8em', width: "30%" },
            '@media(max-width: 650px)': { fontSize: '0.7em', width: "32%" }

        },
    }
    const [open,setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [confirmation, setConfirmation] = useState(false);

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
        setConfirmation(false);
    }

    const style={
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        bgcolor: "#190D60",
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    }

    const [amount,setAmount] = useState(false);
    const [formInfo, setFormInfo] = useState({
      amount : 0,
      type: "Deposit",
      address : "myAddress",
      description: "Deposit into account",
      promoCode: "",
  })



    return (
        <>
            {!walletLoading && !recentsLoading ? (
                <div className={styles.walletHolder}>

                    <div className={styles.nbDiv}>
                        <section className={styles.balanceHolder}>

                            <article className={styles.actions}>
                                <div className={styles.balanceCurrencySpan}>
                                    <h2 className={`${styles.walletTitles} ${styles.titleInline}`}>Total Balance</h2>
                                    <span className={styles.currencyDiv}>USD</span>
                                </div>
                                <div className={styles.balanceSpan}>
                                    <span>{userWallet.usdBalance}</span>
                                </div>
                                <div className={styles.actionBtns}>
                                
                                    <Button  onClick={handleOpen} variant="contained" sx={useStyle.hoverBtn}>Deposit</Button>
                                    <Button variant="contained" sx={{
                                        background: `rgba(40, 87, 254, 0.48)`, height: `3em`, width: `28%`, color: "white", '@media(max-width: 950px)': { fontSize: '0.8em', width: "30%" }, '@media(max-width: 650px)': { fontSize: '0.7em', width: "32%" }

                                    }}   >Withdraw</Button>
                                    <Button onClick={transactionHandler}
                                    variant="contained" sx={{
                                        background: `rgba(40, 87, 254, 0.48)`, height: `3em`, width: `28%`, color: "white", '@media(max-width: 950px)': { fontSize: '0.8em', width: "30%" }, '@media(max-width: 650px)': { fontSize: '0.7em', width: "32%" }

                                    }} >     Send
                                    </Button>

                                </div>
                            </article>

                            <article className={styles.balances}>
                                <h2 className={`${styles.walletTitles} ${styles.balanceTitle}`}>Balances</h2>
                                <div className={styles.usdtBalance}>
                                    <span className={styles.cuurencyLogo} >
                                        <img src={crypto} alt="crypto Logo" className={styles.cryptoLogo}></img>
                                        USDT
                                    </span>
                                    <span className={styles.cuurencyAmount} >
                                        {userWallet.usdtBalance}
                                    </span>

                                </div>
                                <div className={styles.usdBalance}>
                                    <span className={styles.cuurencyLogo} >
                                        <img src={dollar} alt="dollar Logo" className={styles.dollarLogo}></img>
                                        USD
                                    </span>
                                    <span className={styles.cuurencyAmount} >
                                        {userWallet.usdBalance}
                                    </span>
                                </div>
                            </article>

                        </section>

                        <section className={styles.recentHolder}>
                            <article className={styles.recentTitle}>
                                <span>Wallet Activity</span>
                                <span>Recent</span>

                            </article>
                            <article className={styles.recents}>
                                {
                                    userTransactions.map((transaction,index)=>(
                                        <div className={styles.recentOne} key={index}>
                                        <span className={styles.recentArrow}>
                                            {transaction.type==="deposit"?
                                            (<SouthIcon sx={{ color: 'green', fontSize: '1.8em' }} /> )
                                            :
                                            (transaction.type==="transfer"?
                                            (<NorthIcon sx={{ color: 'green', fontSize: '1.8em' }} />)
                                            :(
                                               transaction.status==="declined" ?
                                               (<SouthIcon sx={{ color: 'red', fontSize: '1.8em' }} />)
                                               :(
                                                transaction.status==="accepted"?
                                                (<SouthIcon sx={{ color: 'green', fontSize: '1.8em' }} /> )
                                               :
                                               (<MoreHorizIcon sx={{ color: 'white', fontSize: '1.8em' }} />))
                                            ))
                                            }
                                            
                                            </span>
                                            <div className={styles.info}>
                                            <span className={styles.recentType}>{transaction.type}</span>
                                        <span className={styles.recentDate}>{transaction.createdAt.substring(0,10)}</span>
                                        {transaction.type==="deposit"?
                                        (     <span className={styles.recentAmount}>${transaction.amountUSD}</span>
                                        ):(<span className={styles.recentAmount}>{transaction.amountUSDT}</span>)
                                        }
                                        {
                                           transaction.status==="pending" ?(<span style={{color:"#9C9C9C"}} className={styles.recentStatus}>{transaction.status.charAt(0).toUpperCase()+ transaction.status.slice(1)}</span>):(
                                            transaction.status==="declined"?(<span className={styles.recentStatus} style={{color:"red"}}>{transaction.status.charAt(0).toUpperCase()+ transaction.status.slice(1)}</span>):(
                                                <span className={styles.recentStatus} style={{color:"green"}}>{transaction.status.charAt(0).toUpperCase()+ transaction.status.slice(1)}</span>
                                            )
                                           )
                                        }
                                            </div>
                                       
                                        
                                    </div>
                                    ))
                                }


<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <div className={styles.depocontainer}>
    <h2 className={styles.depoh2}>Deposit into your account</h2>
    
    <form noValidate autoComplete='off' onSubmit={(e)=>{handleSubmit(e,formInfo, error); setConfirmation(true)}} className={styles.form}>

<TextField 
            // sx={myfield}
            className={styles.fields}
            label="Amount"
            variant='outlined'
            color= 'primary'
            size='small'
            fullWidth
            focused
            required
            error={error}
            onChange={(event) => {
              handleOnlyNumbers(event, setAmount,setError);
              setFormInfo({...formInfo, amount: parseFloat(event.target.value)})
           }}
            InputProps={{
                startAdornment: <InputAdornment position="start"><Typography style={error?{color: "red"} :{ color: 'white' }}>$</Typography></InputAdornment>,
                style: {color: 'white'},
                readOnly: confirmation,
                
            }}
            InputLabelProps={{
                style: { color: 'white' },
                
              }}
            />

            <div className={styles.confirmationSection}>
            <Button
        className={styles.button}
        type='submit'
        color='secondary'
        variant='contained'
        >Deposit</Button>

        {confirmation ? 
        <CheckBoxIcon 
        variant='outlined' 
        color='success'
        ></CheckBoxIcon>        
         : ""}

        </div>

</form>

   </div>
  </Box>
</Modal>


                            </article>
                        </section>
                    </div>
                    <div className={styles.chartsHolder} >
                        <WalletCards type='Income'/>
                        <WalletCards  type='Outcome'/>
                        {/* <WalletCards /> */}
                    </div>
                </div>


            ) : (
            <div style={{ height: '100%', width: '100%',display:"flex" ,justifyContent:"center",alignItems:"center"}}> 
            <h1>
            LOADING..
                </h1></div>
            )

            }
        </>
    )
}
