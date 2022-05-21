# Recipe CLI Tool

## Usage
각종 커멘드 명령어를 사용해서 사용자가 원하는 각종 레시피 정보들을 얻을 수 있습니다.\
사용자는 본인이 입력한 재료들과 각종 정보들을 통해 만들 수 있는 레시피 목록을 제공 받을 수
있을 뿐만 아니라 레시피에 필요한 재료와 양, 만드는 설명이 나와 있는 사이트로의 연결 등 여러가지
방면으로 사용이 가능합니다.

## Description

### How to Install
```
npm install opensourceproject -g
```

### How to Use
chef 명령어에 대한 자세한 정보를 보고 싶다면 아래의 커멘드를 사용하면 됩니다.
```
chef --help
```

chef CLI는 list, link, ingredients 총 3개의 command를 제공하고 있습니다.

#### list Command
list 커멘드에 대한 자세한 정보를 보고 싶다면 아래의 커멘드를 사용하면 됩니다.
```
chef list --help
```
해당 명령어를 사용하게 되면, 출력으로 레시피들 이름에 대한 목록이 나타납니다.\
list 커멘드에는 '-f <food_list>', '-food <food_list>'라는 필수 옵션이 존재합니다.\
<food_list>에는 본인이 사용할 수 있는 재료들을 입력하면 됩니다. 각 재료들은 띄어쓰기가
아닌 ','로 구분되어 있어야 합니다.\
ex)
```
chef list -f chicken,rice
```
##### '-d, --diet <diet_info>'
해당 옵션은 선택입니다. 만약, 넣고 싶은 정보가 있다면 <diet_info>에 해당하는 숫자를
입력하면 됩니다.\
{0 = balanced, 1 = high-fiber, 2 = high-protein, 3 = low-carb, 4 = low-fat, 5 = low-sodium}\
ex)
```
chef list -f chicken,rice -d 2
```
##### '-h, --health <health_info>'
해당 옵션은 선택입니다. 만약, 넣고 싶은 정보가 있다면 <health_info>에 해당하는 숫자를
입력하면 됩니다.\
{0 = alcohol-free, 1 = vegetarian, 2 = vegan, 3 = wheat-free, 4 = sugar-conscious, 5 = gluten-free, 6 = fish-free}\
ex)
```
chef list -f chicken,rice -h 4
```
##### '-m, --meal <meal_type>'
해당 옵션은 선택입니다. 만약, 넣고 싶은 정보가 있다면 <meal_type>에 해당하는 숫자를
입력하면 됩니다.\
{0 = Breakfast, 1 = Dinner, 2 = Launch, 3 = Snack, 4 = Teatime}\
ex)
```
chef list -f chicken,rice -m 1
```

#### link Command
link 커멘드에 대한 자세한 정보를 보고 싶다면 아래의 커멘드를 사용하면 됩니다.
```
chef link --help
```
해당 명령어를 사용하게 되면, 레시피에 대한 만드는 정보가 나와있는 사이트로 연결해줍니다.\
link 커멘드에는 recipe이라는 argument가 존재합니다.\
해당 recipe에는 list 커멘드의 결과로 나온 레시피 이름 중 하나를 입력하면 됩니다.\
ex)
```
chef link hainanese-chicken-rice
```

#### ingredients Command
ingredients 커멘드에 대한 자세한 정보를 보고 싶다면 아래의 커멘드를 사용하면 됩니다.
```
chef ingredients --help
```
해당 명령어를 사용하게 되면, 레시피에 필요한 재료들의 이름과 양을 출력해줍니다.\
ingredients 커멘드에는 recipe이라는 argument가 존재합니다.\
해당 recipe에는 list 커멘드의 결과로 나온 레시피 이름 중 하나를 입력하면 됩니다.\
ex)
```
chef ingredients hainanese-chicken-rice
```
