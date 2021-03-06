import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios';
import Input from '@material-ui/core/Input';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
const useStyles1 = makeStyles((theme) => ({
  root: {
    padding: '2px 0px',
    display: 'flex',
    position: '',
    alignItems: 'center',
    width: 400,
    // marginBottom: '5vh'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    paddingLeft: '3vw'
  },
  iconButton: {
    padding: 10,
    outline: 0,
    outlineColor: 'green'

  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // maxWidth: '36ch',
    width: 400,
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    display: 'flex',
    justifyContent: 'space-between ',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  inline: {
    display: 'inline',
    // textAlign:'left'
    textAlign:'center'
  },
}));


function Reply() {
  const [transition, setTransition] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [messsage, setMesssage] = useState('ζδΊ€ζε');

  const classes1 = useStyles1();
  const classes = useStyles();
  let chatMessage = null;

  const [userName, setUserName] = useState(null)
  const [message, setmessage] = useState(null)
  const [userReply, setUserReply] = useState(null);
  const [displayBtn, setDisplayBtn] = useState(false);
  const [replyType, setReplyType] = useState(0)
  console.log(message);
  const changeUserName = (event) => {

    setUserName(event.target.value)

  }

  const changeUserReply = (event) => {
    // setUserReply(event.target.value)
    setUserReply(event.target.value)
    // alert(userReply)

  }

  const tip = (value) =>{
    setMesssage(value);
    setTransition(() => TransitionDown);
    setOpen(true);
    setTimeout(()=>{setOpen(false)},1300)
  }
  const addReply = () => {

    if(!userReply) {
      tip('θ―·ε‘«εεε€');
      return;
    }
    if(userReply ==='εΌεθ'){
      setReplyType(1);
      setUserReply('');
      tip('θΏε₯εΌεθζ¨‘εΌ')
      return;
    }
    const mData = { answer: userReply, name: userName, type: replyType }

    axios.post('http://121.4.183.85:3066/comment', mData)
      .then((res) => {
        console.log(res);
        setUserReply('');
        searchAnswer()
        tip('εε€ζε')
      })
  }
  const searchAnswer = () => {
    if(!userName){
      setDisplayBtn(false)
      tip('ζ²‘ζθ―₯η¨ζ·')
      return;
    }  
    axios({
      method: 'post',
      url: 'http://121.4.183.85:3066/comment/answer',
      params: { name: userName }
    })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data.length === 0) {
          setDisplayBtn(false)
          tip('ζ²‘ζθ―₯η¨ζ·')
          return;
        };
        tip('ζη΄’ζε')
        setDisplayBtn(true);
        chatMessage = res.data.data[0];
        let message = null;
        let number = 0;
           message = chatMessage.arr.map((item) => {
          return <div key={item.answer+ (number++)}>
            <ListItem >
              {item.type === 0 ? <ListItemAvatar class='m-0'>
                <Avatar   >
             <svg t="1616595675032" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2151" width="200" height="200"><path d="M512.002 512.002m-491.988 0a491.988 491.988 0 1 0 983.976 0 491.988 491.988 0 1 0-983.976 0Z" fill="#FDDF6D" p-id="2152"></path><path d="M617.432 931.356c-271.716 0-491.986-220.268-491.986-491.986 0-145.168 62.886-275.632 162.888-365.684C129.054 155.124 20.014 320.828 20.014 512c0 271.716 220.268 491.986 491.986 491.986 126.548 0 241.924-47.796 329.098-126.298-67.102 34.31-143.124 53.668-223.666 53.668z" fill="#FCC56B" p-id="2153"></path><path d="M426.314 359.704m-142.718 0a142.718 142.718 0 1 0 285.436 0 142.718 142.718 0 1 0-285.436 0Z" fill="#FFFFFF" p-id="2154"></path><path d="M826.554 359.704m-142.718 0a142.718 142.718 0 1 0 285.436 0 142.718 142.718 0 1 0-285.436 0Z" fill="#FFFFFF" p-id="2155"></path><path d="M300.576 556.564c-36.536 0-66.156 29.62-66.156 66.158h132.314c-0.004-36.54-29.622-66.158-66.158-66.158zM877.628 547.698c-36.536 0-66.156 29.62-66.156 66.158h132.314c0-36.538-29.618-66.158-66.158-66.158z" fill="#F9A880" p-id="2156"></path><path d="M390.526 285.09m-40.03 0a40.03 40.03 0 1 0 80.06 0 40.03 40.03 0 1 0-80.06 0Z" fill="#7F184C" p-id="2157"></path><path d="M796.612 282.314m-40.03 0a40.03 40.03 0 1 0 80.06 0 40.03 40.03 0 1 0-80.06 0Z" fill="#7F184C" p-id="2158"></path><path d="M553.388 822.268a19.932 19.932 0 0 1-10.272-2.85c-9.482-5.684-12.558-17.976-6.874-27.458 27.59-46.018 76.732-74.606 128.244-74.606a146.14 146.14 0 0 1 45.684 7.282c10.504 3.448 16.22 14.758 12.77 25.262-3.45 10.498-14.76 16.222-25.262 12.766a106.238 106.238 0 0 0-33.192-5.282c-37.528 0-73.51 21.136-93.908 55.16a20.02 20.02 0 0 1-17.19 9.726z" fill="#7F184C" p-id="2159"></path><path d="M976.568 296.66a162.334 162.334 0 0 0-7.144-14.786c-0.916-1.814-1.79-3.65-2.724-5.452a19.944 19.944 0 0 0-3.282-4.576c-28.984-44.988-79.486-74.866-136.864-74.866-89.732 0-162.732 73-162.732 162.732 0 89.73 73 162.73 162.732 162.73 66.794 0 124.292-40.462 149.336-98.15 5.354 28.624 8.084 57.894 8.084 87.708 0 260.248-211.724 471.968-471.97 471.968S40.03 772.248 40.03 512 251.752 40.03 512 40.03c73.236 0 143.414 16.308 208.588 48.47 9.906 4.892 21.914 0.824 26.804-9.09 4.892-9.914 0.822-21.914-9.092-26.806C667.572 17.698 591.434 0 512 0 229.68 0 0 229.68 0 512c0 282.316 229.68 512 512 512s512-229.68 512-511.998c0-74.35-16.38-148.314-47.432-215.342z m-27.314 63.052c0 67.66-55.044 122.7-122.704 122.7s-122.704-55.044-122.704-122.7 55.044-122.704 122.704-122.704c46.26 0 86.612 25.742 107.516 63.646a477.884 477.884 0 0 1 5.604 11.532 121.936 121.936 0 0 1 9.584 47.526z" fill="" p-id="2160"></path><path d="M426.326 196.98c-89.732 0-162.732 73-162.732 162.732 0 89.73 73 162.73 162.732 162.73s162.732-73 162.732-162.73c0.002-89.732-73.002-162.732-162.732-162.732z m0 285.432c-67.66 0-122.704-55.044-122.704-122.7s55.044-122.704 122.704-122.704 122.704 55.046 122.704 122.704-55.046 122.7-122.704 122.7zM543.116 819.42a20.008 20.008 0 0 0 27.458-6.878c20.398-34.026 56.38-55.16 93.908-55.16 11.358 0 22.524 1.778 33.19 5.282 10.502 3.456 21.814-2.266 25.264-12.764 3.45-10.502-2.262-21.814-12.764-25.264a145.99 145.99 0 0 0-45.69-7.282c-51.516 0-100.652 28.588-128.244 74.606-5.68 9.482-2.604 21.776 6.878 27.46z" fill="" p-id="2161"></path><path d="M791.274 106.798m-20.014 0a20.014 20.014 0 1 0 40.028 0 20.014 20.014 0 1 0-40.028 0Z" fill="" p-id="2162"></path></svg>  
                    </Avatar>
                
              </ListItemAvatar> : null}
              <ListItemText
               style={item.type===1?{'textAlign':'right'}:{'textAlign':'left'} }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                     
                    >
                      {item.answer}
                    </Typography>
                    {/* {" β I'll be in your neighborhood doing errands thisβ¦"} */}
                  </React.Fragment>
                }
              />
              {item.type === 1 ? <ListItemAvatar class='m-0'>
              <Avatar>
                <svg t="1616595407698" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1993" width="200" height="200"><path d="M496.214908 511.991m-476.816794 0a476.816794 476.816794 0 1 0 953.633587 0 476.816794 476.816794 0 1 0-953.633587 0Z" fill="#FFDB6C" p-id="1994"></path><path d="M598.391506 918.425381c-263.337543 0-476.814794-213.477251-476.814794-476.814793 0-140.690824 60.946357-267.131565 157.864925-354.408077C125.074733 166.128973 19.398114 326.723914 19.398114 512.001c0 263.337543 213.477251 476.814794 476.814793 476.814794 122.646719 0 234.463374-46.322271 318.949869-122.402717-65.036381 33.250195-138.710813 52.012305-216.77127 52.012304z" fill="#FFB04C" p-id="1995"></path><path d="M291.303707 518.83704c-35.410207 0-64.118376 28.706168-64.118376 64.114376h128.232752c0.004-35.410207-28.702168-64.114376-64.114376-64.114376zM850.566984 518.83704c-35.410207 0-64.118376 28.706168-64.118376 64.114376h128.232751c0-35.410207-28.706168-64.114376-64.114375-64.114376z" fill="#F9A880" p-id="1996"></path><path d="M221.761299 253.949488c124.500729-28.574167 225.28732-18.74011 336.929975 7.278043 16.556097 3.856023 34.044199 8.158048 52.516307 8.722051 30.76018 0.942006 65.338383-6.714039 95.150558-14.204083 117.70069-29.566173 209.645228-14.188083 298.247747 4.744027l-6.546038 52.360307c-13.832081 0.306002-18.182107 6.75604-22.13413 19.346113-20.680121 65.890386-3.068018 179.26105-155.956913 165.930973-100.580589-8.770051-129.384758-36.328213-177.321039-157.492923-4.078024-10.30606-6.730039-27.33816-30.022176-26.708157-13.152077 0.354002-24.914146 2.680016-29.01617 25.53015-7.646045 42.576249-65.786385 158.258927-183.831078 158.130927-104.264611-0.112001-144.038844-54.232318-148.786871-173.487017-0.590003-14.806087-13.492079-17.618103-21.234125-17.792104l-7.996047-52.358307z" fill="#56586F" p-id="1997"></path><path d="M402.564359 237.469391l-72.812427 248.311455c19.162112 7.884046 42.292248 11.776069 70.02841 11.80407 0.488003 0 0.970006-0.018 1.458009-0.020001l74.080434-252.63548c-24.228142-3.664021-48.350283-6.228036-72.754426-7.460044zM855.359012 239.481403c-24.232142-0.776005-49.386289 0-75.806444 2.950017l-65.002381 221.675299c17.776104 14.928087 38.762227 23.598138 66.468389 28.89417l74.340436-253.519486z" fill="#737891" p-id="1998"></path><path d="M595.539489 861.317047c-106.592625 0-193.005131-86.412506-193.00513-193.005131H788.54462c0.002 106.592625-86.410506 193.005131-193.005131 193.005131z" fill="#7F184C" p-id="1999"></path><path d="M449.626635 668.307916v30.128176c0 12.704074 10.29806 23.000135 23.000134 23.000135h245.823441c12.704074 0 23.000135-10.29806 23.000134-23.000135v-30.128176H449.626635z" fill="#F2F2F2" p-id="2000"></path><path d="M599.591513 781.242578c-52.172306-24.240142-110.066645-20.716121-157.01492 4.422026 35.278207 45.980269 90.754532 75.650443 153.186898 75.650443a192.281127 192.281127 0 0 0 77.344453-16.170095c-17.376102-26.886158-42.292248-49.394289-73.516431-63.902374z" fill="#FC4C59" p-id="2001"></path><path d="M1008.65791 241.519415c-92.632543-19.790116-185.813089-35.034205-307.029799-4.586027-30.182177 7.584044-61.994363 14.474085-89.830526 13.63008-15.552091-0.476003-31.052182-4.096024-46.04227-7.602044l-2.664016-0.624004c-97.26657-22.670133-206.46521-39.24223-345.672025-7.294043a19.398114 19.398114 0 0 0-14.836087 21.834128l8.000047 52.360307a19.396114 19.396114 0 0 0 18.74011 16.462096c0.950006 0.02 1.73001 0.116001 2.328013 0.230002 2.750016 66.008387 15.936093 111.136651 41.476243 141.964832 27.31416 32.968193 68.734403 49.026287 126.628742 49.086287h0.218002c71.188417 0 119.584701-37.840222 147.654865-69.604408 31.478184-35.618209 50.342295-78.148458 55.074322-104.498612 1.238007-6.89204 2.956017-8.60205 2.964018-8.61005 0.282002-0.184001 1.66001-0.800005 7.490044-0.956006 6.040035-0.158001 6.262037-0.162001 9.702057 9.646057 0.592003 1.68801 1.164007 3.308019 1.75801 4.806028 23.394137 59.132346 43.932257 101.200593 73.998433 128.192751 31.794186 28.546167 70.836415 37.230218 119.672702 41.488243 8.802052 0.768005 17.228101 1.154007 25.284148 1.154007 48.494284 0 83.57249-13.950082 106.790626-42.338248 0.590003-0.722004 1.122007-1.470009 1.688009-2.200013 1.034006 12.598074 1.578009 25.258148 1.57801 37.938222 0 252.221478-205.197202 457.41668-457.416681 457.41668S38.794227 764.222478 38.794227 512.001 243.98943 54.58432 496.208907 54.58432c101.060592 0 196.847153 32.290189 277.003624 93.380547 8.52005 6.494038 20.694121 4.850028 27.184159-3.670022 6.494038-8.52205 4.852028-20.694121-3.670022-27.188159-86.97051-66.280388-190.889118-101.316594-300.519761-101.316593C222.599304 15.788093 0 238.389397 0 512.001s222.599304 496.212907 496.208907 496.212908c273.613603 0 496.212907-222.599304 496.212908-496.212908 0-36.180212-3.960023-72.218423-11.682068-107.252628 1.916011-8.998053 3.500021-17.934105 5.014029-26.564156 2.584015-14.680086 5.022029-28.548167 8.674051-40.178235 0.988006-3.142018 1.69601-4.792028 2.120012-5.628033 0.440003-0.06 1.074006-0.118001 1.938012-0.138001a19.396114 19.396114 0 0 0 18.81811-16.9861l6.544038-52.360307a19.388114 19.388114 0 0 0-15.190089-21.374125z m-28.152165 55.360325c-15.966094 6.82004-20.744122 22.038129-23.090135 29.508172-4.404026 14.042082-7.058041 29.116171-9.864058 45.078265-1.282008 7.290043-2.552015 14.458085-3.950023 21.428125a19.320113 19.320113 0 0 0-2.494015 11.466067c-11.194066 47.156276-33.232195 81.96048-119.4547 74.444436-91.150534-7.948047-115.220675-29.676174-160.968943-145.304851-0.414002-1.048006-0.806005-2.180013-1.218007-3.36002-3.764022-10.738063-12.478073-35.624209-45.532267-35.624208-0.600004 0-1.212007 0.008-1.82801 0.026-11.034065 0.298002-40.336236 1.086006-47.586279 41.490243-6.546038 36.456214-59.75035 142.162833-164.550964 142.162833h-0.168001c-89.856527-0.098001-124.934732-42.070247-129.424759-154.858907-0.620004-15.658092-9.540056-27.720162-23.464137-33.198195l-3.220019-21.074123c123.264722-24.950146 222.041301-9.574056 310.59782 11.062064l2.640015 0.616004c16.058094 3.756022 34.260201 8.010047 53.684315 8.60405 32.644191 0.990006 67.570396-6.514038 100.470589-14.780086 105.682619-26.548156 189.731112-15.626092 272.059594 1.250007l-2.638016 21.064124z" fill="" p-id="2002"></path><path d="M807.942734 668.307916c0-10.712063-8.682051-19.398114-19.398114-19.398114H402.534359a19.396114 19.396114 0 0 0-19.398114 19.398114c0 117.120686 95.282558 212.403245 212.403244 212.403244s212.403245-95.282558 212.403245-212.403244z m-384.934255 19.398114h345.064021c-9.672057 86.634508-83.358488 154.210904-172.53101 154.210903s-162.860954-67.576396-172.533011-154.210903z" fill="" p-id="2003"></path><path d="M832.644879 174.241021m-19.398114 0a19.398114 19.398114 0 1 0 38.796227 0 19.398114 19.398114 0 1 0-38.796227 0Z" fill="" p-id="2004"></path></svg>     
                </Avatar>
                  </ListItemAvatar> : null}
            </ListItem>
            <Divider variant="middle" component="li" />
          </div>
        })

        message = <List className={classes.root}>
          {message}

        </List>
        setmessage(message)

      })
  }
  return (
    <div className='flex flex-col align-bottom' style={{'align-items':'center',}} >
      <Paper component="form" className={classes1.root }>

        <InputBase
          className={classes1.input } 
          value={userName}
          onChange={changeUserName}
          placeholder="ιθΏη¨ζ·εζ₯ηεε€"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton className='outline-none' aria-label="search" onClick={searchAnswer}>
          <SearchIcon />
        </IconButton>

      </Paper>
      <Divider variant="middle" component="li" />
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={messsage}
        
        key={transition ? transition.name : ''}
      />

      {displayBtn ? message : null}
     { displayBtn ? (<div className={classes.root2} style={{'marginBottom':'5vh','marginTop':'5vh'}} noValidate autoComplete="off">
    
        <Input placeholder="hhh"
          value={userReply}
          fullWidth
          multiline
          onChange={changeUserReply}
          inputProps={{ 'aria-label': 'description' }} />
        <Button variant="contained" color="primary" style={{ 'max-height': '30px', 'margin-top': 'auto', }} onClick={addReply}>
          εε€
      </Button>
  </div>) : null }
     
    </div>
  );
}

export default Reply;