PGDMP         "            
    z            storeapi    14.2    14.2 &               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    storeapi    DATABASE     l   CREATE DATABASE storeapi WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE storeapi;
                postgres    false            F           1247    50257    transaction_type_enum    TYPE     T   CREATE TYPE public.transaction_type_enum AS ENUM (
    'deposit',
    'withdraw'
);
 (   DROP TYPE public.transaction_type_enum;
       public          postgres    false            �            1259    16526    orders    TABLE     G  CREATE TABLE public.orders (
    order_id bigint NOT NULL,
    user_id bigint NOT NULL,
    product_id bigint NOT NULL,
    delivered character varying(1) NOT NULL,
    address text NOT NULL,
    quantity integer NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16523    orders_order_id_seq    SEQUENCE     |   CREATE SEQUENCE public.orders_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_order_id_seq;
       public          postgres    false    216                       0    0    orders_order_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;
          public          postgres    false    213            �            1259    16525    orders_product_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.orders_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.orders_product_id_seq;
       public          postgres    false    216                       0    0    orders_product_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.orders_product_id_seq OWNED BY public.orders.product_id;
          public          postgres    false    215            �            1259    16524    orders_user_id_seq    SEQUENCE     {   CREATE SEQUENCE public.orders_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orders_user_id_seq;
       public          postgres    false    216                       0    0    orders_user_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orders_user_id_seq OWNED BY public.orders.user_id;
          public          postgres    false    214            �            1259    16396    products    TABLE       CREATE TABLE public.products (
    product_id bigint NOT NULL,
    product_name character varying(50) NOT NULL,
    category character varying(50),
    price double precision NOT NULL,
    product_description character varying(254) NOT NULL,
    stock_qty bigint NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16395    products_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_product_id_seq;
       public          postgres    false    210                       0    0    products_product_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;
          public          postgres    false    209            �            1259    16403    users    TABLE     q  CREATE TABLE public.users (
    user_id bigint NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(200) NOT NULL,
    password character varying(255) NOT NULL,
    address text,
    age integer,
    phone_number character varying(12) NOT NULL,
    CONSTRAINT phone_number CHECK (((phone_number)::text ~ '^(\+92|0|92)[0-9]{10}'::text))
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16402    users_user_id_seq    SEQUENCE     z   CREATE SEQUENCE public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    212                       0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    211            n           2604    16529    orders order_id    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN order_id DROP DEFAULT;
       public          postgres    false    213    216    216            o           2604    16530    orders user_id    DEFAULT     p   ALTER TABLE ONLY public.orders ALTER COLUMN user_id SET DEFAULT nextval('public.orders_user_id_seq'::regclass);
 =   ALTER TABLE public.orders ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    214    216    216            p           2604    16531    orders product_id    DEFAULT     v   ALTER TABLE ONLY public.orders ALTER COLUMN product_id SET DEFAULT nextval('public.orders_product_id_seq'::regclass);
 @   ALTER TABLE public.orders ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    215    216    216            k           2604    16399    products product_id    DEFAULT     z   ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);
 B   ALTER TABLE public.products ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    210    209    210            l           2604    16406    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    211    212    212                      0    16526    orders 
   TABLE DATA           u   COPY public.orders (order_id, user_id, product_id, delivered, address, quantity, created_at, updated_at) FROM stdin;
    public          postgres    false    216   N+       
          0    16396    products 
   TABLE DATA           m   COPY public.products (product_id, product_name, category, price, product_description, stock_qty) FROM stdin;
    public          postgres    false    210   @,                 0    16403    users 
   TABLE DATA           _   COPY public.users (user_id, username, email, password, address, age, phone_number) FROM stdin;
    public          postgres    false    212   �,                  0    0    orders_order_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orders_order_id_seq', 18, true);
          public          postgres    false    213                       0    0    orders_product_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.orders_product_id_seq', 1, false);
          public          postgres    false    215                       0    0    orders_user_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orders_user_id_seq', 1, false);
          public          postgres    false    214                       0    0    products_product_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.products_product_id_seq', 15, true);
          public          postgres    false    209                        0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 89, true);
          public          postgres    false    211            {           2606    16535    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    216            s           2606    16401    products products_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    210            u           2606    16412    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    212            w           2606    16410    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    212            y           2606    16483    users users_user_id_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_id_key UNIQUE (user_id);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_user_id_key;
       public            postgres    false    212            |           2606    16536    orders orders_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);
 G   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_product_id_fkey;
       public          postgres    false    216    3187    210            }           2606    16541    orders orders_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    212    3191    216               �   x��ҹq1@ј[� q�W�D�Dg�?���F� IC�����~�ޟ�#���v�X��x:������ ��/��n�27����O�p!�9^=6�f§��hI����.��RKG[�5r�Z:��4�
��y"���&��Q�90k��ٺ�,v�����=PC�� iu	��RB�F.D��I���6J$i���q�[P5-]�W�xT��q� �!�v      
      x�m�1�0Eg�� (�� ,�q�.qR\WI<��I@B �����;��R��������q[f�Y�3~����U��p�
ߊ=�h!��Z)C�>K�hg䮿yw\q��3}CN"Ѿ��Y�ǭ1�	[�9{         �  x���ێ�0���s�"`���$PmX���)�ho8��� 	a����[�m��*Yc����k��ګ��䲈�"�4	%ITI�^��Wy!����	�p'AEP�1�U�T��|���4с����,mCE Dh,g��(x~�aQ/yņ��x�k dED�/1�FDd2����r��_!���h
�����K���`-�gПqh��G�a5�<�Q���K+�M"Λ�a������
�u���m�5?����$@�ܣd{��heJ����Zj�ɬ�C�蛱�r���I׃�*�*��K#B���~?�,��髮�_4MF���ײ��g�l�Ͷz�@+)����yN�&��5�tO~Ecx^��4��xq}[���+�\�jl�-�}[!19��Zv���d�Ǝ���gt-�ӹj$k��ۇs�-�ab�����!��e�'��x     