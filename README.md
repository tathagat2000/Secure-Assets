# ppt-secure-assets

## Getting started
Ensure that the node version you are using is valid.

```bash
openssl genrsa -out private_key.pem 2048
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

```bash
yarn
```

```bash
yarn start
```

[presentation.pdf](https://sprinklr-my.sharepoint.com/:b:/p/chinmay_chaudhary/Ee-lYxPQVv5DnQvqxY30Yk0BhcoF5esoy1RUv6YX1wyWeQ?e=tiC6jo)  

[InsecureMediaLogger.tsx](https://prod-gitlab-ui.sprinklr.com/sprinklr/frontend/sprinklr-ui-hub/-/blob/main/packages/modules/src/media/secureMedia/contexts/components/insecureMediaLogger/InsecureMediaLogger.tsx)  

[graylog filter](https://qa6-logs.sprinklr.com/messages/graylog_293/36fd7f84-c66a-11ee-9dee-7a48735402e1)  

### prompts for microsoft co-pilot

Give real world examples of data leaks because of publicly accessible aws s3.

write express js code to send an HTML file.

generate minimal HTML to render a form to take username and password. Add unicorn styles.

generate minimal HTML that shows a feed. Every feed item contains an image and a text.

what is digital signature?

write node js code to use an RSA key-pair to sign a message.

write node js code to serve any route that matches /imgs/* and log the value of *.


### expired asset links
https://s3.amazonaws.com/spr-secure-uploads-prod12/24117/ACCOUNT/IMAGE/2BB90310BF3AA5A2FD8BA5803D8B6CFE?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLWVhc3QtMSJHMEUCICZtoleGJs7XQ8NtHKqO0dcxcftcyE4UAGpUR16p7s91AiEAw9Fog%2BL5jnWhYoFp9uaV6BkBIB2RNMlTc%2FeI9ipC%2FGoq%2FAQIaxAAGgw4NjkzNjc0NzE2NzQiDPawxEK%2BwJkSBISFoyrZBMA1eHWGmRZGFsd3koOskyGquy%2FIE%2B37pRLT7wBZjw5Jry5Ju0C86%2FRw5lh5uin7GShECTuC0%2BaeFTkDvzJPWUIr9GTaF6RwFyY2JIqWB0YURwBPO3APiPet1x2fH2pwU6BpgPLwlG%2BrwrahJcYI14DR3B8gneFdgDZQB7LBOmfuuqtmkK%2Ff%2Fw9QiJCAgs0xyxxaE8paFuw9VofEoHaq0CqlAikgYmUM%2BD8cC%2BzHUrTVqW%2BeUuwRksYO6F%2F%2B1KmiBo85VO%2Fl8TKpLNaFW0OEDLSM1DP4wm%2BpoMzJ2lwYpj%2FEuySmI7R%2F0EdHdgaijd9Ujp%2FN%2Bb1Ov46fMhpM6SXx1AhVtB9o2NJqIdmDYgc44nje01GRFqSQHkYAX0EIgK%2FLhqbFCIBjqUQzkiEW8QIq%2FAhD6IvM6RDbAm3qkU4QUSkecWoirztuHUgQ%2Fe8t4TNR3ZuyzOO%2FhMDgpVCWeG9%2Fkk%2FIN48YjdVNUta5wmXle3ZKr%2BdYQsNSrS%2FItLp%2B%2BDvEQnV4Z9qQQHL63p4WJFGr6NeDh6kCKdRAihD4eFf2lTTISUk2ru2v4Z%2BCiQGkMmZic%2BAlVNyKBJpxiGlan7DaJcimVtjmSsZPZ4JnamBOYwAQeQRtdOTLvyD2FWwIYdn1z%2B3Ne6%2BMuLKJO1nXx035pEM8ncqQA1XkvhsaiAPbmqEBi6Zoqeeo0qGHm8czyiEiaa1tJxyOyKhkGQ%2FCgfGer6s41otbY1o02Lvd%2F5Abmva25POlKFnoKj2CL47PPFka1j82Db%2BALvHBogvir6X0J1UrI%2Fqe6mqY6Ugwy9WUrwY6mgFEwf%2F2l%2BKzUispV4Ow6aB%2BV%2BT2pGaIznx0EIp4%2B5pcjSFKEwdu3YBW%2BknTEcCFuQ%2Bx4av46X%2BQoJCEmHqn3M%2FmEJ81318W%2BrmKeN1aun%2BsZWiTW5nlfdp1GH7hvmUk1k8ZAzi6ZTwMDSFHTr3%2FK4eyKm4BEKsjPrde8dWC77Y5MLI6rlEW2%2BRSEfQBgtXN%2FbNbK9yOD08hGzR3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240304T015850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4U2SW3Y5KPW3FASM%2F20240304%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9be8637e614c726ab49d2043eeae13acf25a82461837f787c8f987e048f38d2b


https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpeg&cs=fFNQTw&docid=https%3A%2F%2Fsprinklr-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!fZo5RA9VAU-d6R2JS-J9F4HaWzvcMhZCldF6HuX6kVY6fXRgDOqfRohq9ST5MUL5%2Fitems%2F01RJKCE4HHLOLDP4EC4BDLEE37VMFFUGSV%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3ByaW5rbHItbXkuc2hhcmVwb2ludC5jb21ANTJiYzdlMjItNjYzMS00Yzg4LTljNGYtOWMxMTVjMTg2MTQ4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTcwOTUxMDQwMCIsImV4cCI6IjE3MDk1MzIwMDAiLCJlbmRwb2ludHVybCI6IkZNZ3JyNHNwTHJsTVBqVVNqQWtiUUJtRytNcFhlZnQ3U3NtamprZmx5Uk09IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTgiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJORFF6T1RsaE4yUXROVFV3WmkwMFpqQXhMVGxrWlRrdE1XUTRPVFJpWlRJM1pERTMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCIsXCJkdmNfY21wXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfGNoaW5tYXkuY2hhdWRoYXJ5QHNwcmlua2xyLmNvbSIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwNGU3ZTFhM2FAbGl2ZS5jb20iLCJzaWQiOiIyY2RlYmRlZS00NGZhLTQ0ZjAtOTA4Yy01YTFjMGIyOTU2ZmIiLCJ0dCI6IjAiLCJpcGFkZHIiOiI3My4yMjcuMTMwLjE5MCIsInNuaWQiOiI2Iiwic3RwIjoidCJ9.djMeG9q7eGYlYXAVG-uXmyirexhP1OIeqjrwgrg6vhw&cTag=%22c%3A%7B37965BE7-82F0-46E0-B213-7FAB0A5A1A55%7D%2C1%22&encodeFailures=1&width=1024&height=1024&srcWidth=1024&srcHeight=1024


### links
https://prod-gitlab-ui.sprinklr.com/sprinklr/frontend/sprinklr-ui-hub/-/merge_requests/10475/diffs

https://excalidraw.com/#json=9jnAirEnzOHKR0oAbMFpB,Jle3henuS4NtT8BplRZEJA

https://excalidraw.com/#json=LyzXgyxUH7cP3jzpeyyGI,oMi57HCWL9ICBX90Mn_FZw

https://excalidraw.com/#json=F0P9cq4f8iTSXlDr40yde,LGQsPzR3CBTbEJV7uJXvMQ

https://www.upguard.com/breaches/verizon-cloud-leak


