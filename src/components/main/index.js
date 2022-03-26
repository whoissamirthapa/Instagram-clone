import React, { Fragment, useContext, useEffect, useState } from 'react'

import classes from './style.module.css';

import optionIcon from '../../assets/optionicon.png';
import avatar from '../../assets/avatar.jpg';
import StoryIndex from './storyindex';
import { listImages } from '../../firebase';
import ModalContext from '../../store/modalctx';

const MainComponent = () => {

  const fileCtx = useContext(ModalContext);

  const [file,setFile] = useState(["https://img.freepik.com/free-psd/medium-shot-man-watching-movie-tv_23-2149252442.jpg?t=st=1648280411~exp=1648281011~hmac=69b3584a03acdc21c5cc9a03cdc26c5bd7bcced20a4316c5acbc43e95cff63e1&w=1060"]);

  const date = new Date();
  const year = date.getFullYear();


  useEffect(()=>{

    async function fetchFile(){
      const images = await listImages("images/");
      if(images){
        console.log(images)
        setFile(prevState=>{
          return [...prevState,...images]
        })
        fileCtx.addUrl(images);
      }
      //console.log(file);
      return images;
    }
    fetchFile()

  },[])

  
  return (
    <Fragment>
      <div className={classes.post_main_container+ " mt-8"}>

        {/*----------Main Home post----------------- */}
        
        <div className={classes.story_post_container}>

          {/*----------Story ----------------- */}
          <StoryIndex />
          
          {/*----------first post----------------- */}
        
        { file.length && file.map((image,key)=>{return  (
          <div className={classes.post_container+ " mt-8 border-2"} key={key}>
            <div className={classes.post_header_container+ " p-6 mb-8"}>
              <div className={classes.img_username}>
                <div className={classes.img_head} >
                  <img 
                    src={avatar} 
                    alt="Avatar" 
                    height={"35px"} 
                    width={"35px"}
                    className="rounded-full"
                    />
                </div>
                <div className={classes.username_head+ " font-semibold"} >
                  <a href="#" >_gee_y</a>
                </div>
              </div>
              <div className={classes.opt_icon}>
                <img src={optionIcon} alt="option icon" height={"30px"} width={"20px"} />
              </div>
            </div>
            
            <div className={classes.post_image}>
              <img src={image} alt="Uploaded image" />
            </div>

            <div className={classes.post_desc+ " p-4 mt-4"}>
              <p>
                <strong className={classes.usernm_desc}>_gee_y</strong> 
                <span>here is the description my boy</span>
              </p>
            </div>

            <div className={classes.post_comment+ "  mt-2 py-2 px-4"} >
              <div className={classes.display_comment}>
                <div>Comments:</div>
                <div className={classes.list_of_comment}>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>y_nayoung_</strong> 
                    <span>Cool boye kfhaosdifas</span>
                  </p>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>Ongju_gl</strong> 
                    <span>a lsf haosid ahfoesi </span>
                  </p>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>kimHyun_</strong> 
                    <span>vhals fhaou gw98e ghsbey ghweo</span>
                  </p>
                </div>
              </div>

              <form className={classes.comment_form+ " border-t-2"}>
                <div className='mt-4'>
                  <input 
                    type={"text"} 
                    id="comment"
                    name='comment'
                    placeholder='Add a comment'
                    className={classes.comment_input}
                  /> 
                </div>
                <div>
                  <button className={classes.comment_btn}>
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>) })}


           {/*----------second post----------------- */}
          <div className={classes.post_container+ " mt-8 border-2"} >
            <div className={classes.post_header_container+ " p-6 mb-8"}>
              <div className={classes.img_username}>
                <div className={classes.img_head} >
                  <img 
                    src={avatar} 
                    alt="Avatar" 
                    height={"35px"} 
                    width={"35px"}
                    className="rounded-full"
                    />
                </div>
                <div className={classes.username_head+ " font-semibold"} >
                  <a href="#">_gee_y</a>
                </div>
              </div>
              <div className={classes.opt_icon}>
                <img src={optionIcon} alt="option icon" height={"30px"} width={"20px"} />
              </div>
            </div>
            
            <div className={classes.post_image}>
              <img src={avatar} alt="Uploaded image" />
            </div>

            <div className={classes.post_desc+ " p-4 mt-4"}>
              <p>
                <strong className={classes.usernm_desc}>_gee_y</strong> <span>here is the description my boy</span>
              </p>
            </div>

            <div className={classes.post_comment+ "  mt-2 py-2 px-4"} >
              <div className={classes.display_comment}>
                <div>Comments:</div>
                <div className={classes.list_of_comment}>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>y_nayoung_</strong> 
                    <span>Cool boye kfhaosdifas</span>
                  </p>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>Ongju_gl</strong> 
                    <span>a lsf haosid ahfoesi </span>
                  </p>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>kimHyun_</strong> 
                    <span>vhals fhaou gw98e ghsbey ghweo</span>
                  </p>
                </div>
              </div>

              <form className={classes.comment_form+ " border-t-2"}>
                <div className='mt-4'>
                  <input 
                    type={"text"} 
                    id="comment"
                    name='comment'
                    placeholder='Add a comment'
                    className={classes.comment_input}
                  /> 
                </div>
                <div>
                  <button className={classes.comment_btn}>
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>



           {/*----------third post----------------- */}
          <div className={classes.post_container+ " mt-8 border-2"} >
            <div className={classes.post_header_container+ " p-6 mb-8"}>
              <div className={classes.img_username}>
                <div className={classes.img_head} >
                  <img 
                    src={avatar} 
                    alt="Avatar" 
                    height={"35px"} 
                    width={"35px"}
                    className="rounded-full"
                    />
                </div>
                <div className={classes.username_head+ " font-semibold"} >
                  <a href="#">_gee_y</a>
                </div>
              </div>
              <div className={classes.opt_icon}>
                <img src={optionIcon} alt="option icon" height={"30px"} width={"20px"} />
              </div>
            </div>
            
            <div className={classes.post_image}>
              <img src={avatar} alt="Uploaded image" />
            </div>

            <div className={classes.post_desc+ " p-4 mt-4"}>
              <p>
                <strong className={classes.usernm_desc}>_gee_y</strong> <span>here is the description my boy</span>
              </p>
            </div>

            <div className={classes.post_comment+ "  mt-2 py-2 px-4"} >
              <div className={classes.display_comment}>
                <div>Comments:</div>
                <div className={classes.list_of_comment}>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>y_nayoung_</strong> 
                    <span>Cool boye kfhaosdifas</span>
                  </p>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>Ongju_gl</strong> 
                    <span>a lsf haosid ahfoesi </span>
                  </p>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>kimHyun_</strong> 
                    <span>vhals fhaou gw98e ghsbey ghweo</span>
                  </p>
                </div>
              </div>

              <form className={classes.comment_form+ " border-t-2"}>
                <div className='mt-4'>
                  <input 
                    type={"text"} 
                    id="comment"
                    name='comment'
                    placeholder='Add a comment'
                    className={classes.comment_input}
                  /> 
                </div>
                <div>
                  <button className={classes.comment_btn}>
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>





          {/* fourth post */}
          <div className={classes.post_container+ " mt-8 border-2"} >
            <div className={classes.post_header_container+ " p-6 mb-8"}>
              <div className={classes.img_username}>
                <div className={classes.img_head} >
                  <img 
                    src={avatar} 
                    alt="Avatar" 
                    height={"35px"} 
                    width={"35px"}
                    className="rounded-full"
                    />
                </div>
                <div className={classes.username_head+ " font-semibold"} >
                  <a href='#'>_gee_y</a>
                </div>
              </div>
              <div className={classes.opt_icon}>
                <img src={optionIcon} alt="option icon" height={"30px"} width={"20px"} />
              </div>
            </div>
            
            <div className={classes.post_image}>
              <img src={avatar} alt="Uploaded image" />
            </div>

            <div className={classes.post_desc+ " p-4 mt-4"}>
              <p>
                <strong className={classes.usernm_desc}>_gee_y</strong> <span>here is the description my boy</span>
              </p>
            </div>

            <div className={classes.post_comment+ "  mt-2 py-2 px-4"} >
              <div className={classes.display_comment}>
                <div>Comments:</div>
                <div className={classes.list_of_comment}>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>y_nayoung_</strong> 
                    <span>Cool boye kfhaosdifas</span>
                  </p>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>Ongju_gl</strong> 
                    <span>a lsf haosid ahfoesi </span>
                  </p>
                  <p className={classes.indv_comment+ " mb-4"}>
                    <strong className={classes.usernm_comment}>kimHyun_</strong> 
                    <span>vhals fhaou gw98e ghsbey ghweo</span>
                  </p>
                </div>
              </div>

              <form className={classes.comment_form+ " border-t-2"}>
                <div className='mt-4'>
                  <input 
                    type={"text"} 
                    id="comment"
                    name='comment'
                    placeholder='Add a comment'
                    className={classes.comment_input}
                  /> 
                </div>
                <div>
                  <button className={classes.comment_btn}>
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        
        {/* aside of main home page */}

        <div className={classes.info_container}>
          
          <div className={classes.switch_account}>
            <div className={classes.swi_img_name}>
              <div className={classes.swi_img}>
                <img 
                  src={avatar} 
                  alt="avatar" 
                  height={"60px"} 
                  width={"56px"} 
                  className="rounded-full" 
                />
              </div>
              <div className={classes.swi_name_username}>
                <p>
                  <a href='#' >
                    <strong className={classes.swi_username}>_gee_y</strong>
                  </a>
                </p>
                <p>
                  <span className={classes.swi_name}>Jiyeon Lee</span>
                </p>
              </div>
            </div>

            <div className={classes.swi_btn}>
              <a href='#'>
                Switch
              </a>
            </div>
          </div>

          <div className={classes.suggested_acc+ " mt-8"} >
            <div className={classes.sugg_acc_header}>
              <div className={classes.suggestion_title}>
                <strong>Suggestions For You</strong>
              </div>
              <div>
                <a href='#'>
                  <strong>See All</strong>
                </a>
              </div>
            </div>

            <div className={classes.suggested_acc_container+ " mt-4 pl-4"}>
              <div className={classes.suggested_acc_indv}>
                <div className={classes.sugg_img_name}>
                  <div className={classes.sugg_img}>
                    <img 
                      src={avatar} 
                      alt="avatar" 
                      height={"35px"} 
                      width={"35px"} 
                      className="rounded-full" 
                    />
                  </div>
                  <div className={classes.sugg_name_username}>
                    <p>
                      <a href='#' >
                        <strong className={classes.sugg_username}>YuBfes</strong>
                      </a>
                    </p>
                    <p>
                      <span className={classes.sugg_name}>Jiyeon Lee</span>
                    </p>
                  </div>
                </div>

                <div className={classes.sugg_follow_btn}>
                  <a href='#'>
                    <strong>Follow</strong>
                  </a>
                </div>
              </div>
            </div>


            <div className={classes.suggested_acc_container+ " mt-4 pl-4"}>
              <div className={classes.suggested_acc_indv}>
                <div className={classes.sugg_img_name}>
                  <div className={classes.sugg_img}>
                    <img 
                      src={avatar} 
                      alt="avatar" 
                      height={"35px"} 
                      width={"35px"} 
                      className="rounded-full" 
                    />
                  </div>
                  <div className={classes.sugg_name_username}>
                    <p>
                      <a href='#' >
                        <strong className={classes.sugg_username}>_gee_y</strong>
                      </a>
                    </p>
                    <p>
                      <span className={classes.sugg_name}>Jiyeon Lee</span>
                    </p>
                  </div>
                </div>

                <div className={classes.sugg_follow_btn}>
                  <a href='#'>
                    <strong>Follow</strong>
                  </a>
                </div>
              </div>
            </div>


            <div className={classes.suggested_acc_container+ " mt-4 pl-4"}>
              <div className={classes.suggested_acc_indv}>
                <div className={classes.sugg_img_name}>
                  <div className={classes.sugg_img}>
                    <img 
                      src={avatar} 
                      alt="avatar" 
                      height={"35px"} 
                      width={"35px"} 
                      className="rounded-full" 
                    />
                  </div>
                  <div className={classes.sugg_name_username}>
                    <p>
                      <a href='#' >
                        <strong className={classes.sugg_username}>_gee_y</strong>
                      </a>
                    </p>
                    <p>
                      <span className={classes.sugg_name}>Jiyeon Lee</span>
                    </p>
                  </div>
                </div>

                <div className={classes.sugg_follow_btn}>
                  <a href='#'>
                    <strong>Follow</strong>
                  </a>
                </div>
              </div>
            </div>

            <div className={classes.suggested_acc_container+ " mt-4 pl-4"}>
              <div className={classes.suggested_acc_indv}>
                <div className={classes.sugg_img_name}>
                  <div className={classes.sugg_img}>
                    <img 
                      src={avatar} 
                      alt="avatar" 
                      height={"35px"} 
                      width={"35px"} 
                      className="rounded-full" 
                    />
                  </div>
                  <div className={classes.sugg_name_username}>
                    <p>
                      <a href='#' >
                        <strong className={classes.sugg_username}>_gee_y</strong>
                      </a>
                    </p>
                    <p>
                      <span className={classes.sugg_name}>Jiyeon Lee</span>
                    </p>
                  </div>
                </div>

                <div className={classes.sugg_follow_btn}>
                  <a href='#'>
                    <strong>Follow</strong>
                  </a>
                </div>
              </div>
            </div>

            <div className={classes.suggested_acc_container+ " mt-4 pl-4"}>
              <div className={classes.suggested_acc_indv}>
                <div className={classes.sugg_img_name}>
                  <div className={classes.sugg_img}>
                    <img 
                      src={avatar} 
                      alt="avatar" 
                      height={"35px"} 
                      width={"35px"} 
                      className="rounded-full" 
                    />
                  </div>
                  <div className={classes.sugg_name_username}>
                    <p>
                      <a href='#' >
                        <strong className={classes.sugg_username}>_gee_y</strong>
                      </a>
                    </p>
                    <p>
                      <span className={classes.sugg_name}>Jiyeon Lee</span>
                    </p>
                  </div>
                </div>

                <div className={classes.sugg_follow_btn}>
                  <a href='#'>
                    <strong>Follow</strong>
                  </a>
                </div>
              </div>
            </div>


          </div>



          <footer className={classes.aside_footer+ " mt-16"}>
            <div className={classes.imp_links}>
              <a href='#'>About </a>&bull;
              <a href='#'> Help</a>&bull;
              <a href='#'> Press </a>&bull;
              <a href='#'> API </a>&bull;
              <a href='#'> Jobs </a>&bull;
              <a href='#'> Privacy </a>&bull;
              <a href='#'> Terms </a>&bull;
              <a href='#'> Locations </a>&bull;
              <a href='#'> Top Accounts </a>&bull;
              <a href='#'> Hashtags </a>&bull;
              <a href='#'> Language </a>
            </div>
            
            <div className={classes.copy_insta+ " mt-8"}>
              &copy; {year} INSTAGRAM FROM META
            </div>
            
          </footer>
        </div>


        
      </div>
    </Fragment>
  )
}

export default MainComponent