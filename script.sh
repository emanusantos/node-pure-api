echo '\n\n requesting all heroes'
curl localhost:3000/heroes

echo '\n\n requesting foo'
curl localhost:3000/heroes/1

echo '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes

echo '\n\n creating emanu'
CREATE=$(curl --silent -X POST \
    --data-binary '{"name": "Emanu", "age": 21, "power": "code" }' \
    localhost:3000/heroes)
echo $CREATE