const request = require('supertest')
const app = require('./index')



describe('test login',()=>{
    describe('password wrong',()=>{
        test('password wrong', async()=>{
            const response  =  await request(app).post('/auth/login')
            .send(body={

                email : 'fatihhaa27@gmail.com',
                password : '14325'
            })
            // expect(response.text).toBe('{\"response\":\"password wrong\"}')
            expect(response.body).toEqual({ response: 'password wrong' });
        })

    })


    describe('register', () => {
        test('test email if exist ',async()=>{
          const response = await request(app).post('/auth/register').send(body ={
            username : 'sahtfatiha',
            email : 'fatihhaa27@gmail.com',
            password : '12345'
          });
       
          expect(response.body).toEqual({ response: 'email already exist' });

        })
      })
})


