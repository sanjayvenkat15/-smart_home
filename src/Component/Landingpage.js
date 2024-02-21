import React, { useEffect, useState } from 'react'
import HeaderLogo from "../assets/hero.png"
import { UilBars } from '@iconscout/react-unicons'
import "../Component/contact.css"
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
// <------------------Images----------------->
import AppleStore from "../assets/Apple-logo.png"
import AndroidStore from "../assets/google playstore.png"
import Decorater1 from "../assets/header-decorator1.png"
import Decorater2 from "../assets/header-decorator-2.png"
import About1 from "../assets/about1.png"
import About2 from "../assets/about2.png"
import About3 from "../assets/about3.png"
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.png"
import client5 from "../assets/client5.png"
import client6 from "../assets/client6.png"
import client7 from "../assets/client7.png"
import client8 from "../assets/client8.png"
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.jpg"
import avatar3 from "../assets/avatar3.jpg"
import avatar4 from "../assets/avatar4.jpg"
import mylogo from "../assets/mylogo.png"
import downloadapp from "../assets/app.png"
import { NavLink } from 'react-router-dom'
import Header from './Header'
function Landingpage() {
	const[qnsShow,setQnsShow]=useState(0)
	
	
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
	  setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};
useEffect(()=>{
	const handlescroll=()=>{
const navElement=document.querySelector('nav')

	if(window.scrollY > 0 ){
		navElement.classList.add("window-scroll")
	}
	else{
		navElement.classList.remove('window-scroll')
	}
}
window.addEventListener('scroll',handlescroll)

return ()=>{
	window.removeEventListener('scroll',handlescroll)
}

},[])


const handle_submit=(e)=>{
e.target.reset()
}


  return (
<>





<header>
<div className='container header__container'>
<h2 className='header__title'>Smart Home<br></br>Application</h2>
<p className='lead'>Mobile content is any type of web hypertext and 
information content and electronic media which is viewed or used on
 mobile phones.</p>
<div className='header__img'>
<img src={HeaderLogo}/>

</div>

<div className='cta'>
<a href='#' className='btn btn-primary'>
<div className="logo">
<img src={AppleStore}/>
</div>
<span>
	<small>Download on the</small>
	<h4>GET IT ON</h4>
</span>


</a>
<a href='#' className='btn btn-primary'>
<div className="logo">
<img src={AndroidStore}/>
</div>
<span>
	<small>Download on the</small>
	<h4>App Store</h4>
</span>


</a>
</div>

<div className='header__social'>
<a href='https://facebook.com/apple' target='_blank'>
<i class="uil uil-facebook-f"></i>
</a>

<a href='https://facebook.com/apple' target='_blank'>
<i class="uil uil-instagram-alt"></i>
</a>
<a href='https://twitter.com/apple' target='_blank'>
<i class="uil uil-twitter"></i>
</a>
<a href='https://linkedin.com/apple' target='_blank'>
<i class="uil uil-linkedin-alt"></i>
</a>


</div>


</div>
<div className='header__decorater-1'>
	<img src={Decorater1}/>
</div>
<div className='header__decorater-2'>
	<img src={Decorater2}/>
</div>





</header>

{/* <----------End of Header-----------------> */}
<section id='about'>
	<h1>About Us</h1>
	<div className='container about__container'>
<article className='about__article'>
	<div className='about__img'>
		<img src={About1}/>
	</div>
	<div className='about__content'>
		<h3 className='about__content-title'>
			Smort Home's Smart Services
		</h3>
		<p>Smart homes can choose to have smart speakers, lights, thermostats, doorbells, or home hubs. Smart technology 
			can also extend to kitchen appliances or outdoor or landscaping equipment. New innovations are continually 
			 what is in a smart home.</p>
			 <a href='#' className='btn btn-primary'>Learn More</a>
	</div>
</article>


<article className='about__article'>
	
	<div className='about__content'>
		<h3 className='about__content-title'>
			Smort Home's Smart Services
		</h3>
		<p>Smart homes can choose to have smart speakers, lights, thermostats, doorbells, or home hubs. Smart technology 
			can also extend to kitchen appliances or outdoor or landscaping equipment. New innovations are continually 
			 what is in a smart home.</p>
			 <a href='#' className='btn btn-primary'>Learn More</a>
	</div>
	<div className='about__img'>
		<img src={About2}/>
	</div>
</article>



<article className='about__article'>
	<div className='about__img'>
		<img src={About3}/>
	</div>
	<div className='about__content'>
		<h3 className='about__content-title'>
			Smort Home's Smart Services
		</h3>
		<p>Smart homes can choose to have smart speakers, lights, thermostats, doorbells, or home hubs. Smart technology 
			can also extend to kitchen appliances or outdoor or landscaping equipment. New innovations are continually 
			 what is in a smart home.</p>
			 <a href='#' className='btn btn-primary'>Learn More</a>
	</div>
</article>
</div>


</section>
{/* <----------End of About-----------------> */}
<section id='clients'>
<h1>Clients</h1>
<p>
Smart homes can choose to have smart speakers, lights, thermostats, 
doorbells, or home hubs. Smart technology can also extend to kitchen 
appliances or outdoor or landscaping equipment. New innovations are
 continually
 evolving what is in a smart home.
</p>
<div className='container clients__container' >
<div><img src={client1}/></div>
<div><img src={client2}/></div>
<div><img src={client3}/></div>
<div><img src={client4}/></div>
<div><img src={client5}/></div>
<div><img src={client6}/></div>
<div><img src={client7}/></div>
<div><img src={client8}/></div>

</div>




</section>
{/* <----------End of Clients-----------------> */}






<section id='testimonials'>
<div className='container testimonials__container'>
<h1>Testimonials</h1>
<p>
Smart homes can choose to have smart speakers, lights, thermostats, 
doorbells, or home hubs. Smart technology can also extend to kitchen 
appliances or outdoor or landscaping equipment. New innovations are
 continually
 evolving what is in a smart home.
</p>
<div className='testimonial__clients'>
<article className='testimonial__article'>
<p>As good as a story is at hitting the reasons why the company is great, consumers need 
	to know: "What's in it for me?" The blurb should 
	focus on one or two key benefits</p>
	<div className='testimonial__client-data'>
<div className='avatar'>
	<img src={avatar1}/>
</div>
<div className='testimonial__work'>
	<p><b>sanjay</b></p>
	<small>Developer</small>
</div>
</div>
</article>
<article className='testimonial__article'>
<p>As good as a story is at hitting the reasons why the company is great, consumers need 
	to know: "What's in it for me?" The blurb should 
	focus on one or two key benefits</p>
	<div className='testimonial__client-data'>
<div className='avatar'>
	<img src={avatar2}/>
</div>
<div className='testimonial__work'>
	<p><b>sanjay</b></p>
	<small>Developer</small>
</div>
</div>
</article>
<article className='testimonial__article'>
<p>As good as a story is at hitting the reasons why the company is great, consumers need 
	to know: "What's in it for me?" The blurb should 
	focus on one or two key benefits</p>
	<div className='testimonial__client-data'>
<div className='avatar'>
	<img src={avatar3}/>
</div>
<div className='testimonial__work'>
	<p><b>sanjay</b></p>
	<small>Developer</small>
</div>
</div>
</article>
<article className='testimonial__article'>
<p>As good as a story is at hitting the reasons why the company is great, consumers need 
	to know: "What's in it for me?" The blurb should 
	focus on one or two key benefits</p>
	<div className='testimonial__client-data'>
<div className='avatar'>
	<img src={avatar4}/>
</div>
<div className='testimonial__work'>
	<p><b>sanjay</b></p>
	<small>Developer</small>
</div>
</div>
</article>
</div>
</div>
</section>
{/* <----------End of Testimonials-----------------> */}


<section id='faqs'>
<h1>FAQ</h1>
	<div className='container faqs__container'>

	<div className="faq">
      <article className={openIndex === 1 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(1)}>
          {openIndex === 1 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">How does this product benefit me?</h4>
          <p className={openIndex === 1 ? 'faq__answer-open' : 'faq__answer'}>
            Our product offers various benefits such as improved health, enhanced well-being, and increased happiness.
          </p>
        </div>
      </article>

      <article className={openIndex === 2 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(2)}>
          {openIndex === 2 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">Is the product safe for long-term use?</h4>
          <p className={openIndex === 2 ? 'faq__answer-open' : 'faq__answer'}>
            Yes, our product is designed for long-term use and has undergone rigorous safety testing to ensure its effectiveness and safety.
          </p>
        </div>
      </article>

      <article className={openIndex === 3 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(3)}>
          {openIndex === 3 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">How can I purchase the product?</h4>
          <p className={openIndex === 3 ? 'faq__answer-open' : 'faq__answer'}>
            You can purchase our product through our official website or authorized retailers. Visit our website for more information.
          </p>
        </div>
      </article>

      <article className={openIndex === 4 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(4)}>
          {openIndex === 4 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">Are there any side effects?</h4>
          <p className={openIndex === 4 ? 'faq__answer-open' : 'faq__answer'}>
            Our product is well-tolerated, but some individuals may experience mild side effects. Consult with a healthcare professional for personalized advice.
          </p>
        </div>
      </article>

      <article className={openIndex === 5 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(5)}>
          {openIndex === 5 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">Can the product be used by all age groups?</h4>
          <p className={openIndex === 5 ? 'faq__answer-open' : 'faq__answer'}>
            Our product is suitable for adults of all age groups. However, we recommend consulting with a healthcare professional for specific age-related concerns.
          </p>
        </div>
      </article>

      <article className={openIndex === 6 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(6)}>
          {openIndex === 6 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">Are there any restrictions on product usage?</h4>
          <p className={openIndex === 6 ? 'faq__answer-open' : 'faq__answer'}>
            Our product may have certain usage restrictions. Please refer to the product label or consult with a healthcare professional for specific guidelines.
          </p>
        </div>
      </article>

      <article className={openIndex === 7 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(7)}>
          {openIndex === 7 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">How can I contact customer support?</h4>
          <p className={openIndex === 7 ? 'faq__answer-open' : 'faq__answer'}>
            For any inquiries or assistance, you can reach our customer support team through phone, email, or live chat. Visit our website for contact details.
          </p>
        </div>
      </article>
    </div>

	</div>
</section>
{/* <----------End of FAQ-----------------> */}

<section id='downloadapp'>
<div className='container downloadapp__container'>
<div className='downloadapp__content'>
<h1>Download<br></br>App</h1>
<p>As good as a story is at hitting the reasons why the company is great, consumers need 
	to know: "What's in it for me?" The blurb should 
	focus on one or two key benefits</p>

<div className='cta'>
<a href='#' className='btn btn-primary'>
<div className="logo">
<img src={AppleStore}/>
</div>
<span>
	<small>Download on the</small>
	<h4>GET IT ON</h4>
</span>


</a>
<a href='#' className='btn btn-primary'>
<div className="logo">
<img src={AndroidStore}/>
</div>
<span>
	<small>Download on the</small>
	<h4>App Store</h4>
</span>


</a>
</div>

</div>

<div className='downloadapp_img'>
	<img src={downloadapp}/>
</div>


</div>




</section>
{/* <----------End of Dowloadapp-----------------> */}

<section id='subscribe'>
	<div className='container subscribe__container'>
		<div className='subscribe__text'>
			<h2>Subscribe to get update</h2>
			<p>
			As good as a story is at hitting the reasons why the company is great, consumers need 
	to know: "What's in it for me?" The blurb should 
	focus on one or two key benefits
			</p>
		
		</div>
		<a href='#' className='btn subscribe__btn'>Get Update</a>
	</div>
</section>
{/* <----------End of Subscribe-----------------> */}


<section id='contact'>

<h2>Contact Me</h2>
<div className='container contact__container'>
  <div className='contact__options'>
<article className='contact__option'>
<MdOutlineEmail className='contact__option-icon'/>
<h4>Email</h4>
<h5>baranees1@gmail.com</h5>
<a href='mailto:sanjayven20@gmail.com'  target='_blank'>Send a message</a>
</article>
<article className='contact__option'>
<RiMessengerLine className='contact__option-icon'/>
<h4>Messenger</h4>
<h5>sanjay</h5>
<a href='https://www.facebook.com/messages/t/100009984880059'  target='_blank'>Send a message</a>
</article>
<article className='contact__option '>
<BsWhatsapp className='contact__option-icon'/>
<h4>Whatsapp</h4>
<h5>+1234567890</h5>
<a  href="https://api.whatsapp.com/send?phone=919790564130" target="_blank">Send a message</a>
</article>


  </div>
{/* 
<---------------form-----------> */}

<form  action='https://formspree.io/f/xeqbjkyo' method='post' onSubmit={handle_submit}>
<input type='text' name="name" placeholder='Your Full Name' required/>
<input type='email' name="email" placeholder='Your Email' required/>
<textarea  name="message" rows="7" placeholder='Message' required/>

<button type='submi' className='btn btn-primary'>Send Message</button>


</form>





</div>









    </section>
	<footer >

<div className='container footer__container'>

	<div className='footer__1'>
		<div className='logo'>
			<a href='#'><h3>SmortHome</h3></a>
		</div>
		<p>As good as a story is at hitting the reasons why the company
			 is great, consumers need 
	to know: "What's in it for me?"</p>
	<div className='footer__subscribe'>
		<input type='email' placeholder='Enter Email' required/>
		<button type='submit' ><i class="uil uil-arrow-right"></i></button>
	</div>
	</div>
	<div className='footer__2'>
		<h4>Permalinks</h4>
		<ul className='permalinks'>
<li>
	<a href='#'>Home</a>
</li>
<li>
	<a href='#about'>About</a>
</li>
<li>
	<a href='#'>Testimonials</a>
</li>
<li>
	<a href='#'>FAQs</a>
</li>
<li>
	<a href='#'>Contact</a>
</li>


</ul>
	</div>

	<div className='footer__3'>
		<h4>Privacy</h4>
		<ul className='privacy'>
<li>
	<a href='#'>Privacy Policy</a>
</li>
<li>
	<a href='#about'>Terms and condition</a>
</li>
<li>
	<a href='#'>Refund Policy</a>
</li>



</ul>
	</div>
	<div className='footer__4'>
		<h4>Contact Us</h4>
		<p>
			+01 234 567 8910
			baranees1@gmail.com
		</p>
		<ul className='footer__social'>
<a href='https://facebook.com/apple' target='_blank'>
<i class="uil uil-facebook-f"></i>
</a>

<a href='https://facebook.com/apple' target='_blank'>
<i class="uil uil-instagram-alt"></i>
</a>
<a href='https://twitter.com/apple' target='_blank'>
<i class="uil uil-twitter"></i>
</a>
<a href='https://linkedin.com/apple' target='_blank'>
<i class="uil uil-linkedin-alt"></i>
</a>


</ul>


	</div>
</div>

<div className='copyright'>
<small>Copyright &copy; MC BOY</small>
</div>
</footer>

</>
  )
}

export default Landingpage
