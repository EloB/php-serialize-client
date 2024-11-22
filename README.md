# PHP Serializer CLI Tool

A CLI tool for `php-serialize`.

## Installation

```sh
npm install -g php-serialize-client
```

## Usage

```sh
php-serialize [options] [command]
```

## Options

- `-V, --version`        Output the version number
- `-h, --help`           Display help for command

## Commands

- `serialize [input]`    Serialize a JavaScript object into PHP format
- `unserialize [input]`  Unserialize a PHP serialized string into a JavaScript object
- `help [command]`       Display help for command

## Examples

### Serialize a JavaScript object

```sh
php-serialize serialize '{"key": "value"}'
```

### Unserialize a PHP serialized string

```sh
php-serialize unserialize 'a:1:{s:3:"key";s:5:"value";}'
```

### Using stdin

You can also use stdin for input:

```sh
echo '{"key": "value"}' | php-serialize serialize
```

```sh
echo 'a:1:{s:3:"key";s:5:"value";}' | php-serialize unserialize
```

## License

This project is licensed under the MIT License.
