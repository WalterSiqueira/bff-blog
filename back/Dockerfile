FROM python:3.11-slim

WORKDIR /app

COPY ./requirements.txt /app/

RUN pip3 install -r requirements.txt

COPY ./src/ /app/

ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_DEBUG=1
ENV FLASK_ENV=development
CMD ["flask", "run"]