# test-bot
Тестовые задачи;

Переходим в нужную директорию и копируем репозиторий git clone https://github.com/SergeyTolmachev/test-bot.git

1) cd test-bot;  

2) docker-compose up -d - запускает приложение (консьюмеры + очередь);  

3) docker-compose exec test bash - входим в контейнер;  

4) node generate - запускаем генерацию задач в очередь;  

5) для просмотра логов в "прямом эфире" выходим из контейнера exit и docker-compose logs -f test;  


