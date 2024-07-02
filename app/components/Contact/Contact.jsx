'use client';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import sskAnimation from '../../Animation/Animation - 1714325389766.json';
import EmilAnimation from '../../Animation/Animation - 2.json';
import phone from '../../Animation/Animation - phone.json';
import phone1 from '../../Animation/Animation - phone 1.json';

export default function Contact() {
  const [state, handleSubmit] = useForm('xbjnwjzw');
  setTimeout(() => {}, 5000);

  return (
    <section>
      <div className='content-left'>
        <div className='contact'>
          <p className='icon-mail' />
          <h2>Contact us</h2>
        </div>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi
          aspernatur expedita dolorem aliquam molestiae
        </p>
        <form action='' onSubmit={handleSubmit}>
          <div className='email'>
            <label htmlFor='email'>Address Email : </label>
            <input autoComplete='off' id='email' type='email' name='email' />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>
          <div className='message'>
            <label htmlFor='message'>Your Message : </label>
            <textarea name='message' id='message' />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <button
            type='submit'
            disabled={state.submitting}
            className='btn-submit'
          >
            {state.submitting === true ? 'loading...' : 'submit'}
          </button>
          {state.succeeded && (
            <p
              style={{
                color: 'green',
                fontWeight: 'bold',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Lottie
                style={{ width: 40, marginRight: 10 }}
                animationData={sskAnimation}
              />
              <span>Your message has been sent successfully 👌</span>
            </p>
          )}
          {state.errors && (
            <p style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>
              The message was not sent ☹️
            </p>
          )}
        </form>
        {/* معلومات الاتصال */}
        <div className='contact-info'>
          <div>
            <p>Phone: 0652064823</p>
            <p>Email: info@example.com</p>
            <p>Address: Street Address, City, Country</p>
            <a href='https://wa.me/212652064823'>
              <Lottie
                className='animation'
                style={{ marginRight: 10, width: 100 }}
                animationData={phone}
              />
            </a>
          </div>
        </div>
        {/* نهاية معلومات الاتصال */}
      </div>
      <div className='content-right'>
        <Lottie
          className='animation'
          style={{ marginRight: 10, width: 450 }}
          animationData={EmilAnimation}
        />
        <a href='https://wa.me/212652064823'>
          <Lottie
            className='animation'
            style={{ marginRight: 10, width: 300 }}
            animationData={phone1}
          />
        </a>
      </div>
    </section>
  );
}
