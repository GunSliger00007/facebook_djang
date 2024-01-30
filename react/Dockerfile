FROM python:3.10.11

ENV PYHTONUNBUFFERED=1

WORKDIR /code

COPY requirements.txt .

RUN pip install -r requirement.txt

COPY . .

EXPOSE 8000

CMD ["python3","manage.py","runserver"]