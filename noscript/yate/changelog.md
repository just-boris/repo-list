Changelog
=========

0.0.60
------

  * Пофикшен #202. Поддержка произвольных строк в jpath nametest.

0.0.59
------

  * Merged #201. Какая-то поддержка вложенных массивов.

0.0.58
------

  * Merged #199. parse-tools -> 0.0.17

0.0.57
------

  * Временно возвращаем возможность использовать `include` внутри блоков,
    не на верхнем уровне файла.

0.0.54 — 0.0.56
---------------

  * Ловили странный баг, добавляли логирование, потом все оторвали.

0.0.53
------

  * В runtime'е вместо `s.toString()` используем `'' + s`.
    Потенциально, это фиксит странный баг в Сафари.

0.0.52
------

  * Пофикшен #195.

0.0.51
------

  * Меняем местами аргументы `subnode()`:

        subnode("foo", 42)

        subnode("foo", {
            "bar": 24
        })

0.0.50
------

  * Функция `subnode`, которая делает примерно то же самое, что и `document`,
    но не меняет контекст документа:

        apply subnode(42, "foo")

        bar = {
            "bar": 24
        }
        apply subnode(bar, "foo")

    В этих примерах будет создана нода с именем `"foo"`, подклеенная к текущему контексту.
    Т.е. примерно как:

        //  Условно.
        this.foo = 42;
        apply .foo

        //  Условно.
        this.foo = {
            bar: 24
        };
        apply .foo

    У этой новой ноды родителем будет текущий контекст.

    См. [tests/json.22.yate](tests/json.22.yate).

0.0.49
------

  * Пофикшен #188.

0.0.48
------

  * Пофикшен #189.

0.0.47
------

  * Правильные версии nommon и parse-tools.

0.0.46
------

  * Пофикшен #179.

0.0.45
------

  * Более-менее пофикшен #175.

0.0.44
------

  * Частично пофикшен #181. См. тесты `spaces.*.yate`.

0.0.43
------

  * Пофикшен #178.

0.0.42
------

  * Пофикшен #172 (вроде бы).

0.0.41
------

  * Fixed #171

0.0.40
------

  * Изменен синтаксис атрибутов с динамическим именем.
    Было:

        @{ .name } = 42
        @{ "data-{ .name }" } = 24

    Стало:

        @{ .name } = 42
        @data-{ .name } = 24

    Т.е. статические куски имени (строковые литералы) не нужно заключать в кавычки.
