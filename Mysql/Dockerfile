# Derivando da imagem oficial do MySQL
FROM mysql:5.7

COPY ./conf/my.cnf /etc/mysql/my.cnf

# Adicionando os scripts SQL para serem executados na criação do banco
COPY ./db/ /docker-entrypoint-initdb.d/