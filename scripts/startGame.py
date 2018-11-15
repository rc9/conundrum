import csv
import sys
from twilio.rest import Client

def read_csv(filename):
    numbers = []
    with open(filename) as csv_file:
        reader = csv.reader(csv_file, delimiter=',')
        for line in reader:
            numbers.append(line[3])

    print unicode('Done reading file {0}'.format(filename))
    return numbers[1:]

def send_twilio(phone, token):
    account_sid = "AC3c4bb7f5b638d86bb4af87b0db54a566"
    auth_token = token

    client = Client(account_sid, auth_token)
    message = client.messages.create(
        to=phone,
        from_="+18562633076",
        body="Welcome to CONUNDRUM! Thanks for signing up to play the very first game! To get started, head to http://www.conundrumapp.com/herewego - Good luck!"
        )

if(len(sys.argv) < 3):
    print unicode('ERROR: You must pass a filename then the auth_token')
    exit(1)

filename = sys.argv[1]
token = sys.argv[2]

ns = read_csv(filename)

for n in ns:
    num = "+1" + n
    print unicode('texting {0}'.format(num))
    send_twilio(num, token)

print unicode('sent {0} text(s)'.format(len(ns)))

