FROM php:8.2-fpm

# Añadimos dependencias y utilidades interesantes al sistema como: git, curl, zip, …:
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev

RUN apt-get update && \
     apt-get install -y \
         libzip-dev \
         && docker-php-ext-install zip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd intl opcache

RUN apt-get update && apt-get install -y \
    imagemagick libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick

RUN cp /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini && \
    sed -i 's/upload_max_filesize = 20M/upload_max_filesize = 128M/g' /usr/local/etc/php/php.ini && \
    sed -i 's/whatever_option = 1234/whatever_option = 4321/g' /usr/local/etc/php/php.ini

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
